candiate_1=()
candiate_2=()
wins=(candiate_1,candiate_2)
from random import random
total_wins=0
for i in range(10000):
  num=random()
  region_wins=0
  region1=.87
  region2=.65
  region3=.17
  if num<=region1:
    region_wins=region_wins+1
#You checking if the region is egual or more to wins then add 1 to get the total of that regent.
  if num<=region2:
    region_wins=region_wins+1
     if num<=region3: 
    region_wins=region_wins+1
  percentage=total_wins/10000#Now we looking for the percentage of wins from the total of regions.
