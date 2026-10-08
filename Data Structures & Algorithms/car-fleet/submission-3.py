class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        positionSpeed = sorted(zip(position, speed)) #combine arrays and sort by position.
        stack = []
        
        for p, s in reversed(positionSpeed): # start from car closest to target
            time = (target - p) / s
            if stack and time > stack[-1]:   # if slower car found, add it
                stack.append(time)
            elif not stack:                  # if empty, add car
                stack.append(time)
        return len(stack)    