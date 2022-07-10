# Pi Temperature Logger

Repo to log temperature (meassured by *BMP180* at a raspberry pi) to html file.

## Connecting the Sensor to Raspberry Pi GPIO

The BMP180 was connected to the pi like this:

| BMP180 | GPIO  | Pin |
|--------|-------|-----|
| SDA    | GPIO2 | 3   |
| SCL    | GPIO3 | 5   |
| GND    | GND   | 6   |
| VIN    | 3V3   | 1   |

## Install and Configure Software

```bash
sudo apt install --yes \
  git \
  python3-smbus

sudo raspi-config # interface options/i2c/yes

sudo usermod -a -G i2c rho

crontab -e 
# add the following commands:
# * * * * *  ~/temperature_logger/temperature_logger.py
# 55 * * * * sh -c 'cd ~/temperature_logger && git pull'
# 0 * * * *  sh -c 'cd ~/temperature_logger && git commit -am "commit new data" && git push'
```

Testing: Get location of Meassurement via strongest WLANs SSID

```bash
wlans=$(sudo iw wlan0 scan)
paste --delimiters=',' \
  <(echo "$wlans" | grep -Pio '(?<=signal: ).*') \
  <(echo "$wlans" | grep -Pio '(?<=ssid: ).*') \
  | sort --numeric-sort \
  | tail --lines=1 \
  | cut --delimiter=',' --fields=2
```