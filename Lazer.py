import pygame
import math
class Lazer():
    def __init__(self, surface):
        self.surface = surface
        self.velocity = 8
        # [30, alpha, start, end]
        self.collection = []
        self.x = 640
        self.y = 360
        self.buffer = 0

    def draw(self):
        for el in self.collection:
            pygame.draw.line(self.surface, "white", el[2], el[3])

    def move(self):
        for el in self.collection:
            if el[0] >= 400:
                self.collection.remove(el)
            else:
                el[0] += self.velocity
                el[2] = (self.x + (math.cos(el[1])) * el[0], self.y - (math.sin(el[1])) * el[0])
                el[3] = (self.x + (math.cos(el[1])) * (el[0] + 10), self.y - (math.sin(el[1])) * (el[0] + 10))

    def create(self, alpha):
        # shooting mechanics
        if self.buffer == 0:
            self.buffer = 5
            start = (self.x + (math.cos(alpha)) * 30, self.y - (math.sin(alpha)) * 30)
            end = (self.x + (math.cos(alpha)) * 40, self.y - (math.sin(alpha)) * 40)
            self.collection.append([30, alpha, start, end])
            self.move()
            self.draw()
        else:
            self.buffer -= 1

    def get_collection(self):
        return self.collection

    def set_rm_collection(self, lazer_obj):
        if lazer_obj in self.collection:
            self.collection.remove(lazer_obj)

    def update(self):
        self.move()
        self.draw()
