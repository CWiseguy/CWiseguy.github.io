from random import random
total_wins=0
for i in range(10000):
  num=random()
  region_wins=0
  region1=.87
  region2=.65
  region3=.17
  if random() <=region1:
    region_wins=region_wins+1
#You checking if the region is egual or more to wins then add 1 to get the total of that regent.
  if random()<=region2:
    region_wins=region_wins+1
  if random()<=region3: 
    region_wins=region_wins+1
  if region_wins >= 2;
    total_wins +=1
    
percentage=total_wins/float(10000)#Now we looking for the percentage of wins from the total of regions.
print ("The chances of Winning are (percentage)")
