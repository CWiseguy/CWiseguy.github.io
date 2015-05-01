from random import randint
roll_count = {2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0, 10:0, 11:0, 12:0}

for i in range(500):
  roll = randint(1,6) + randint(1,6)
  roll_count[roll] = roll_count[roll]+1


print roll_count[i]/500
