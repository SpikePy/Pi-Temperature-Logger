#!/usr/bin/python3

import datetime
import os
import random
import smbus
import sys
import time

args = list(map(lambda arg: arg.lower(), sys.argv))
cTemp = 0
pressure = 0


def get_fake_data():
    global cTemp
    global pressure
    cTemp = round(random.uniform(10, 40), 2)
    pressure = round(random.uniform(0, 1), 2)


def get_sensor_data():
    global cTemp
    global pressure

    bus = smbus.SMBus(1)

    # BMP180 address, 0x77
    data = bus.read_i2c_block_data(0x77, 0xAA, 22)

    # Convert the data
    AC1 = data[0] * 256 + data[1]
    if AC1 > 32767:
        AC1 -= 65535
    AC2 = data[2] * 256 + data[3]
    if AC2 > 32767:
        AC2 -= 65535
    AC3 = data[4] * 256 + data[5]
    if AC3 > 32767:
        AC3 -= 65535
    AC4 = data[6] * 256 + data[7]
    AC5 = data[8] * 256 + data[9]
    AC6 = data[10] * 256 + data[11]
    B1 = data[12] * 256 + data[13]
    if B1 > 32767:
        B1 -= 65535
    B2 = data[14] * 256 + data[15]
    if B2 > 32767:
        B2 -= 65535
    MB = data[16] * 256 + data[17]
    if MB > 32767:
        MB -= 65535
    MC = data[18] * 256 + data[19]
    if MC > 32767:
        MC -= 65535
    MD = data[20] * 256 + data[21]
    if MD > 32767:
        MD -= 65535

    time.sleep(0.5)

    bus.write_byte_data(0x77, 0xF4, 0x2E)
    time.sleep(0.5)
    data = bus.read_i2c_block_data(0x77, 0xF6, 2)

    # Convert the data
    temp = data[0] * 256 + data[1]

    bus.write_byte_data(0x77, 0xF4, 0x74)

    time.sleep(0.5)

    data = bus.read_i2c_block_data(0x77, 0xF6, 3)

    # Convert the data
    pres = ((data[0] * 65536) + (data[1] * 256) + data[2]) / 128

    # Callibration for Temperature
    X1 = (temp - AC6) * AC5 / 32768.0
    X2 = (MC * 2048.0) / (X1 + MD)
    B5 = X1 + X2
    cTemp = ((B5 + 8.0) / 16.0) / 10.0

    # Calibration for Pressure
    B6 = B5 - 4000
    X1 = (B2 * (B6 * B6 / 4096.0)) / 2048.0
    X2 = AC2 * B6 / 2048.0
    X3 = X1 + X2
    B3 = (((AC1 * 4 + X3) * 2) + 2) / 4.0
    X1 = AC3 * B6 / 8192.0
    X2 = (B1 * (B6 * B6 / 2048.0)) / 65536.0
    X3 = ((X1 + X2) + 2) / 4.0
    B4 = AC4 * (X3 + 32768) / 32768.0
    B7 = (pres - B3) * (25000.0)
    pressure = 0.0
    if B7 < 2147483648:
        pressure = (B7 * 2) / B4
    else:
        pressure = (B7 / B4) * 2
    X1 = (pressure / 256.0) * (pressure / 256.0)
    X1 = (X1 * 3038.0) / 65536.0
    X2 = ((-7357) * pressure) / 65536.0
    pressure = (pressure + (X1 + X2 + 3791) / 16.0) / 100

    # Calculate Altitude
    altitude = 44330 * (1 - ((pressure / 1013.25) ** 0.1903))


def insert_text_to_line_in_file(insert_text, insert_marker, file_path):
    with open(file_path, "r") as file:
        # store each line of the file as an element of a list
        content = file.readlines()

        # alternative approach
        # index_marker = content.index(insert_marker, 10, 50)
        # content.insert(index_marker + 1, text)
        # content = "".join(content)

        # go through lines by index
        for i in range(len(content)):

            # if the current line containins the defined marker insert text and exit loop
            if insert_marker in content[i]:
                content.insert(i + 1, insert_text)
                break

        # combine list of lines to one multiline string
        content = "".join(content)

    with open(file_path, "w") as file:
        file.write(content)


if "test" in args or "debug" in args:
    print("[test mode]")
    get_fake_data()
else:
    get_sensor_data()

date = datetime.datetime.now()
date = f"{date.strftime('%y')}-{date.strftime('%m')}-{date.strftime('%d')}_{date.strftime('%H')}:{date.strftime('%M')}"
data = '    ["%s", %.1f, %.0f],\n' % (
    date,
    cTemp,
    pressure,
)

print("%s | %.1f | %.0f" % (date, cTemp, pressure))

insert_text_to_line_in_file(
    insert_text=data,
    insert_marker="const data",
    file_path=os.path.dirname(__file__) + "/data.js",
)
