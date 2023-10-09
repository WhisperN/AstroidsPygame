from Pointsystem import Pointsystem

class Global():
    def __init__(self):
        self.SCREEN_WIDTH = 1280
        self.SCREEN_HEIGHT = 720

        self.ASTROIDS = 8
        self.ASTROID_LIVES = 3

        self.ROTATION_SPEED = 5

        self.FPS = 40

        self.MENU_ITEMS = {
            "ASTROIDS":
                ["purple", self.SCREEN_WIDTH / 2, self.SCREEN_HEIGHT / 2 - 200],
            "Start":
                ["black", self.SCREEN_WIDTH / 2, self.SCREEN_HEIGHT / 2 - 50],
            "Quit":
                ["black", self.SCREEN_WIDTH / 2, self.SCREEN_HEIGHT / 2 + 50],
            "GameOver":
                ["You died - Game over", "red", self.SCREEN_WIDTH / 2, self.SCREEN_HEIGHT / 2 - 100]
        }

        # is the game running?
        self.GAME_STATUS = True
        self.RECENTLY_DIED = False
        # are we playing?
        self.GAME_PLAY = False

        self.POINTS = Pointsystem()