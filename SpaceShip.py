import pygame
import math

class SpaceShip():
    def __init__(self, main):
        self.is_alive = True
        self.surface = main
        self.x = 640
        self.y = 360
        # Points of the triangle starting bottom right and moving clockwise [a,b,c]
        self.a_x = 620
        self.a_y = 330
        self.b_x = 660
        self.b_y = 330
        self.c_x = 640
        self.c_y = 390
        # translate angle to radians
        self.alpha = 90 * (math.pi/180)
        self.alpha_b = 315 * (math.pi/180)
        self.alpha_c = 225 * (math.pi/180)

    def draw(self):
        pygame.draw.polygon(self.surface, "white", [(self.c_x, self.c_y), (self.b_x, self.b_y), (self.a_x, self.a_y)])
    def rotate(self, angle):
        # translate to radians
        angle = angle * math.pi/180
        # get new positions for points [a,b,c]
        alph = self.alpha-angle
        self.a_x = self.x + (math.cos(alph)) * 30
        self.a_y = self.y - (math.sin(alph)) * 30

        blph = self.alpha_b - angle
        self.b_x = self.x + (math.cos(blph)) * 30
        self.b_y = self.y - (math.sin(blph)) * 30

        clph = self.alpha_c - angle
        self.c_x = self.x + (math.cos(clph)) * 30
        self.c_y = self.y - (math.sin(clph)) * 30

    def update(self, angle):
        self.rotate(angle)
        self.draw()

    def get_direction(self, angle):
        # Start point
        angle = angle * math.pi / 180
        alph = self.alpha - angle
        return alph
    def set_rm_spaceship(self):
        self.is_alive = False