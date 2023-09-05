from argparse import FileType
import numpy as np
import pandas as pd
import math
import json
import time
import datetime
from slack_sdk import WebClient
import requests

slackToken = "xoxb-2373155174243-2613500234323-mjZCxfncpLECVBc9hsikGBTl"
slackChannel = "C02B31K39U2"

today = datetime.datetime.today()
slackKit = WebClient(token=slackToken)

m = today.month
d = today.day
w = today.weekday()


weekdays = ["월요일", "화요일", "수요일", "목요일", "금요일"]
ments = ["우리는 전 국민이 알만한 서비스를 만든다.", "이제는 어린 여자 셋 CEO 나올 때 됐다. 그게 우리다.", "우리가 하는 모든 생각과 행동은 세상을 바꾸고 있다.", "우리는 3인 5각. 내가 넘어지면 나머지 둘 다 넘어진다"]

dateToCompare = datetime.datetime.strptime("20231231", "%Y%m%d")  # 12월 31일
dateAll = dateToCompare - datetime.datetime.strptime("20230701", "%Y%m%d") # 12월 31일 - 7월 1일
dateBetween = today - datetime.datetime.strptime("20230701", "%Y%m%d") # 현재 - 7월 1일
datePercent = round(dateBetween.days / dateAll.days * 100)

fridayMent = "오늘까지 {}% [{}일] 경과\n\"몰입\"".format(dateBetween.days, datePercent)
ments.append(fridayMent)

ment = ments[w]
week = weekdays[w]

slackKit.chat_postMessage(channel=slackChannel, text="{}월 {}일 {}\n{}".format(m,d,week,ment), as_user=True)