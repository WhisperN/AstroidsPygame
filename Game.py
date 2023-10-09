import time

import pygame
from Astroid import Astroid
from SpaceShip import SpaceShip
from Lazer import Lazer
from Pointsystem import Pointsystem
import time
from Global import Global

class Game(Global):
    def __init__(self):
        Global.__init__(self)
        pygame.init()
        self.screen = pygame.display.set_mode((self.SCREEN_WIDTH, self.SCREEN_HEIGHT))
        clock = pygame.time.Clock()

        while self.GAME_STATUS:
            # poll for events
            # pygame.QUIT event means the user clicked X to close your window
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    running = False

            if self.GAME_PLAY:
                self.game_play()
            elif not self.GAME_PLAY:
                self.game_menu(event)

            clock.tick(self.FPS)

        pygame.quit()

    # Screens
    def game_menu(self, event):
        self.screen.fill("white")
        font = pygame.font.Font(None, 36)

        for key, val in self.MENU_ITEMS.items():
            if self.RECENTLY_DIED and key == "GameOver" or key == "GameOver":
                text_name = font.render(val[0], True, val[1])
                text_rect = text_name.get_rect(center=(val[2], val[3]))
                self.screen.blit(text_name, text_rect)
                self.POINTS.get_points(self.screen, "black")
            else:
                text_name = font.render(key, True, val[0])
                text_rect = text_name.get_rect(center=(val[1], val[2]))
                if event.type == pygame.MOUSEBUTTONDOWN:
                    mouse_pos = pygame.mouse.get_pos()
                    if key == "Start" and text_rect.collidepoint(mouse_pos):
                        self.GAME_PLAY = True
                        self.init_game_session()
                    elif key == "Quit" and text_rect.collidepoint(mouse_pos):
                        self.GAME_STATUS = False

                self.screen.blit(text_name, text_rect)

        pygame.display.flip()

    def game_play(self):
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False

        # fill the screen with a color to wipe away anything from last frame
        self.screen.fill("purple")

        # RENDER YOUR GAME HERE
        self.a.update()

        # get time
        self.curr_time = time.time()
        self.delta_time = self.start_time - self.curr_time
        self.POINTS.update(int(self.delta_time))

        keys = pygame.key.get_pressed()
        if keys[pygame.K_RIGHT]:
            # Rotate clockwise
            self.angle += self.ROTATION_SPEED
        if keys[pygame.K_LEFT]:
            # Rotate counter clockwise
            self.angle -= self.ROTATION_SPEED
        if keys[pygame.K_UP]:
            # Shoot
            self.l.create(self.s.get_direction(self.angle))

        if len(self.l.collection) != 0:
            self.l.update()
        if self.s.is_alive:
            self.s.update(self.angle)
        # Astroid and Lazer mechanics
        for laz in self.l.get_collection():
            for ast in self.a.get_collection():
                if ast[0][0] - 20 <= laz[3][0] and ast[0][0] + 20 >= laz[3][0] and ast[0][1] - 20 <= laz[3][1] and \
                        ast[0][1] + 20 >= laz[3][1]:
                    self.l.set_rm_collection(laz)
                    self.a.set_rm_collection(ast)
                    self.POINTS.set_points(ast[3])
                    break

        # Astroid and Spaceship mechanics
        for ast in self.a.get_collection():
            if ast[0][0] >= 620 and ast[0][0] <= 660 and ast[0][1] <= 390 and ast[0][1] >= 330:
                self.s.set_rm_spaceship()
                self.RECENTLY_DIED = True
                self.GAME_PLAY = False
                self.clear_game_session()

        self.POINTS.get_points(self.screen, "white")

        # flip() the display to put your work on screen
        pygame.display.flip()

    # initializers
    def clear_game_session(self):
        self.l = None
        self.a = None
        self.s = None

    def init_game_session(self):
        self.angle = 0
        self.l = Lazer(self.screen)
        self.a = Astroid(self.screen)
        self.a.create(self.ASTROIDS, self.ASTROID_LIVES, True)
        self.s = SpaceShip(self.screen)
        self.start_time = time.time()
        self.POINTS.set_points(-1)