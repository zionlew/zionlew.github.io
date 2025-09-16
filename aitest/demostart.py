class Menu:
    def __init__(self, title, options):
        """
        初始化菜单
        :param title: 菜单标题
        :param options: 选项列表，每个选项为字符串
        """
        self.title = title
        self.options = options

    def display(self):
        """显示菜单"""
        print(f"=== {self.title} ===")
        for idx, option in enumerate(self.options, 1):
            print(f"{idx}. {option}")

    def get_choice(self):
        """获取用户选择"""
        while True:
            try:
                choice = int(input("请选择编号: "))
                if 1 <= choice <= len(self.options):
                    return choice
                else:
                    print("无效选择，请重新输入。")
            except ValueError:
                print("请输入有效的数字。")

# 示例用法
if __name__ == "__main__":
    menu = Menu("主菜单", ["开始游戏", "设置", "退出"])
    menu.display()
    choice = menu.get_choice()
    print(f"你选择了: {menu.options[choice - 1]}")