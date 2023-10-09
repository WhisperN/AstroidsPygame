# Points system
# 1) For each survived 5 seconds
# 2) For each destroyed object (small = more points)
import pygame

class Pointsystem():
    def __init__(self):
        self.points = 0
        self.time_store = 0

    def set_points(self, lives):
        if lives == 3:
            self.points += 4
        elif lives == 2:
            self.points += 6
        elif lives == 1:
            self.points += 8
        elif lives == -1:
            self.points = 0

    def get_points(self, screen, col):
        font = pygame.font.Font(None, 36)
        counter_text = font.render(str(self.points), True, col)
        counter_rect = counter_text.get_rect(center=(1200, 20))
        screen.blit(counter_text, counter_rect)

        pygame.display.flip()

        return counter_rect

    def update(self, time):
        if time != self.time_store:
            if time % 5 == 0:
                self.points += 2
                self.time_store = time
