import pygame
import random
import math
class Astroid():
    def __init__(self, main):
        self.velocity = 4
        self.surface = main
        # [tuple position, direction]
        # [(pos_x, pos_y), deg, rad, lives, radius]
        self.collection = []
        self.radius = 33

    def draw(self):
        for el in self.collection:
            # Bounce mechanics
            deg = None
            # upper border y = 0
            if el[0][1] <= 0:
                # two ways to hit the border 179 to 90 or 89 to 1 degrees
                if el[1] <= 179 and el[1] >= 90:
                    delta = 180 - el[1]
                    deg = 180 + delta
                elif el[1] < 90 and el[1] >= 1:
                    delta = 90 - el[1]
                    deg = 360 - delta
            # left border x = 0
            elif el[0][0] <= 0:
                # two ways to hit the border 91 to 180 and 180 to 269 degrees
                if el[1] >= 91 and el[1] <= 180:
                    delta = el[1] - 90
                    deg = 90 - delta
                elif el[1] > 180 and el[1] <= 269:
                    delta = 270 - el[1]
                    deg = 270 + delta
            # bottom border y = 720
            elif el[0][1] >= 720:
                # two ways to hit the border 181 to 270 and 270 to 359 degrees
                if el[1] >= 181 and el[1] <= 270:
                    # calculate the delta from the middle
                    delta = el[1] - 180
                    deg = 180 - delta
                if el[1] > 270 and el[1] <= 359:
                    delta = 360 - el[1]
                    deg = delta
            # right border x = 1280
            elif el[0][0] >= 1280:
                # two ways to hit the border 271 to 0 and 0 to 89 degrees
                if el[1] >= 271 and el[1] <= 360:
                    delta = el[1] - 270
                    deg = 270 - delta
                if el[1] >= 0 and el[1] <= 89:
                    delta = 90 - el[1]
                    deg = 90 + delta
            # No border case
            if deg is not None:
                rad = deg * math.pi/180
                new = (el[0][0] + (math.cos(rad)) * self.velocity, el[0][1] - (math.sin(rad)) * self.velocity)
                el[1] = deg
                el[2] = rad
            else:
                new = (el[0][0] + (math.cos(el[2])) * self.velocity, el[0][1] - (math.sin(el[2])) * self.velocity)
            el[0] = new
            pygame.draw.circle(self.surface, "white", new, el[4])

    def create(self, quant, lives, initial, radius=33, position=""):
        for i in range(0, quant):
            deg = random.randint(0, 359)
            rad = deg * math.pi / 180
            if initial:
                # margin box around the spaceship
                margin_y = 150
                margin_x = 150
                # spawn mechanics
                pos_x = 640
                pos_y = 360
                while pos_y >= (360-margin_y/2) and pos_y <= (360+margin_y/2):
                    pos_y = random.randint(0, 720)
                while pos_x >= (640-margin_x/2) and pos_x <= (640+margin_x/2):
                    pos_x = random.randint(0, 1280)
                self.collection.append([(pos_x, pos_y), deg, rad, lives, self.radius])
            else:
                self.collection.append([position, deg, rad, lives-1, radius-7])

    def get_collection(self):
        return self.collection

    def set_rm_collection(self, astroid_obj):
        self.collection.remove(astroid_obj)
        if astroid_obj[3] > 0:
            self.create(3, astroid_obj[3], False, astroid_obj[4], astroid_obj[0])

    def update(self):
        self.draw()