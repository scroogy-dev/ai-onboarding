"""실습용 더미 파일 생성기.

step02-file-classifier의 sample-files/ 디렉토리에 분류 실습용 샘플 파일을
stdlib만 사용해 생성한다. 외부 의존성 없이 실행 가능하다.

사용:
    python3 scripts/generate-samples.py

생성 파일 (총 8개):
    매칭 excel (3): report-2025.xlsx, budget.xlsm, sales.csv
    매칭 image (3): photo.png, diagram.png, icon.gif
    매칭 없음 (2): notes.txt, README.md
"""

import os
import struct
import zipfile
import zlib

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.normpath(os.path.join(HERE, "..", "sample-files"))


def _ooxml_files(macro_enabled: bool) -> dict[str, str]:
    """최소 유효 xlsx/xlsm OOXML 파트 모음."""
    if macro_enabled:
        wb_ct = "application/vnd.ms-excel.sheet.macroEnabled.main+xml"
    else:
        wb_ct = (
            "application/vnd.openxmlformats-officedocument."
            "spreadsheetml.sheet.main+xml"
        )
    return {
        "[Content_Types].xml": (
            '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
            '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">'
            '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>'
            '<Default Extension="xml" ContentType="application/xml"/>'
            f'<Override PartName="/xl/workbook.xml" ContentType="{wb_ct}"/>'
            '<Override PartName="/xl/worksheets/sheet1.xml" '
            'ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'
            "</Types>"
        ),
        "_rels/.rels": (
            '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
            '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
            '<Relationship Id="rId1" '
            'Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" '
            'Target="xl/workbook.xml"/>'
            "</Relationships>"
        ),
        "xl/_rels/workbook.xml.rels": (
            '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
            '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
            '<Relationship Id="rId1" '
            'Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" '
            'Target="worksheets/sheet1.xml"/>'
            "</Relationships>"
        ),
        "xl/workbook.xml": (
            '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
            '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" '
            'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">'
            '<sheets><sheet name="Sheet1" sheetId="1" r:id="rId1"/></sheets>'
            "</workbook>"
        ),
        "xl/worksheets/sheet1.xml": (
            '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
            '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">'
            '<sheetData><row r="1"><c r="A1" t="inlineStr"><is><t>샘플 데이터</t></is></c></row></sheetData>'
            "</worksheet>"
        ),
    }


def make_xlsx(path: str, macro: bool = False) -> None:
    with zipfile.ZipFile(path, "w", zipfile.ZIP_DEFLATED) as z:
        for name, data in _ooxml_files(macro).items():
            z.writestr(name, data)


def make_png(path: str, width: int, height: int, rgb: tuple[int, int, int]) -> None:
    """최소 유효 RGB PNG."""
    def chunk(typ: bytes, data: bytes) -> bytes:
        return (
            struct.pack(">I", len(data))
            + typ
            + data
            + struct.pack(">I", zlib.crc32(typ + data) & 0xFFFFFFFF)
        )

    sig = b"\x89PNG\r\n\x1a\n"
    ihdr = struct.pack(">IIBBBBB", width, height, 8, 2, 0, 0, 0)  # 8-bit RGB
    raw = b""
    for _ in range(height):
        raw += b"\x00" + bytes(rgb) * width
    idat = zlib.compress(raw, 9)
    with open(path, "wb") as f:
        f.write(sig)
        f.write(chunk(b"IHDR", ihdr))
        f.write(chunk(b"IDAT", idat))
        f.write(chunk(b"IEND", b""))


def make_gif(path: str) -> None:
    """1x1 유효 GIF89a (35 bytes)."""
    # signature + LSD + GCT(2) + image descriptor + LZW data + trailer
    gif_hex = (
        "474946383961"            # GIF89a
        "01000100800000"          # LSD: 1x1, GCT, bg=0, aspect=0
        "FFFFFF000000"            # GCT: white, black
        "2C00000000010001000002"  # image descriptor + LZW min code size
        "024401"                  # sub-block (length 2, data)
        "00"                      # block terminator
        "3B"                      # trailer
    )
    with open(path, "wb") as f:
        f.write(bytes.fromhex(gif_hex))


def main() -> None:
    os.makedirs(OUT, exist_ok=True)

    # Excel 계열 (3)
    make_xlsx(os.path.join(OUT, "report-2025.xlsx"), macro=False)
    make_xlsx(os.path.join(OUT, "budget.xlsm"), macro=True)
    with open(os.path.join(OUT, "sales.csv"), "w", encoding="utf-8") as f:
        f.write("월,매출,비고\n1월,1200000,상승\n2월,1350000,상승\n3월,1180000,하락\n")

    # Image 계열 (3)
    make_png(os.path.join(OUT, "photo.png"), 16, 16, (220, 200, 180))
    make_png(os.path.join(OUT, "diagram.png"), 16, 16, (180, 200, 220))
    make_gif(os.path.join(OUT, "icon.gif"))

    # 매칭 없음 (2)
    with open(os.path.join(OUT, "notes.txt"), "w", encoding="utf-8") as f:
        f.write("샘플 메모입니다. 분류 실습용 더미 텍스트.\n")
    with open(os.path.join(OUT, "README.md"), "w", encoding="utf-8") as f:
        f.write(
            "# step02 sample-files\n\n"
            "step02-file-classifier 실습용 더미 파일 모음입니다.\n\n"
            "| 파일 | 매칭 옵션 | 비고 |\n"
            "|------|---------|------|\n"
            "| `report-2025.xlsx` | excel | 최소 유효 OOXML |\n"
            "| `budget.xlsm` | excel | 매크로 활성 OOXML |\n"
            "| `sales.csv` | excel | UTF-8 텍스트 |\n"
            "| `photo.png` | image | 16x16 RGB PNG |\n"
            "| `diagram.png` | image | 16x16 RGB PNG |\n"
            "| `icon.gif` | image | 1x1 GIF89a |\n"
            "| `notes.txt` | (없음) | 일반 텍스트 |\n"
            "| `README.md` | (없음) | 본 안내 (분류 시 미매칭으로 들어감) |\n\n"
            "재생성: `python3 scripts/generate-samples.py` (외부 의존성 없음).\n"
        )

    print(f"생성 완료: {OUT}")


if __name__ == "__main__":
    main()
