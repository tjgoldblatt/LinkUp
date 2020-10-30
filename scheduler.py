#s = {[[10,50],[60,120]],[[20,50],[60,140]}
def timepicker(s,duration):
	selected_times = {}
	time_marker = 0;
	isavail = false
	while(time_marker<2400):
		isavail = false
		for(person in s):
			if (!isFree(person,time_marker)):
				break
		if(isavail):
			selected_times.add(time_marker)
		if(selected_times.length > 4):
			break
	return selected_times

#person is a set of time slots that correspond to one person, time_marker is the current time we are checking if available in 2400 time format
def isFree(person,time_marker):
	for slot in person:
		if(slot[0] <= time_marker && slot[1] >= time_marker):
			return true
	return false
if __name__ == __main__: