#!/usr/bin/env python3

from random import randint
import json

xm = 1300
ym = 700
n = 1000
data = [{'x': randint(0, xm), 'y': randint(0, ym)} for _ in range(n)]

with open('points.json', 'w') as f:
    json.dump(data, f)
