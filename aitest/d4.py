import requests
from bs4 import BeautifulSoup
from datetime import datetime
import re

def extract_sony_comments(url):
    """
    从雅虎财经索尼评论区提取评论内容和时间
    """
    try:
        # 设置请求头，模拟浏览器访问
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        
        # 发送GET请求
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()  # 检查请求是否成功
        
        # 解析HTML内容
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # 查找id为cmtlst的div
        comment_list_div = soup.find('div', id='cmtlst')
        
        if not comment_list_div:
            print("未找到id为cmtlst的div")
            return
        
        # 查找所有class为comment的div
        comment_divs = comment_list_div.find_all('div', class_='comment')
        
        if not comment_divs:
            print("未找到任何评论")
            return
        
        comments_data = []
        
        for comment_div in comment_divs:
            try:
                # 提取时间信息
                com_writer = comment_div.find('p', class_='comWriter')
                if com_writer:
                    time_span = com_writer.find('span')
                    if time_span:
                        time_text = time_span.get_text(strip=True)
                        # 检查时间格式是否为【月日 时分】
                        if re.match(r'\d{1,2}月\d{1,2}日 \d{1,2}:\d{1,2}', time_text):
                            # 提取评论内容
                            com_text = comment_div.find('p', class_='comText')
                            if com_text:
                                comment_content = com_text.get_text(strip=True)
                                comments_data.append({
                                    'time': time_text,
                                    'content': comment_content
                                })
            except Exception as e:
                print(f"处理评论时出错: {e}")
                continue
        
        # 打印结果
        if comments_data:
            print(f"找到 {len(comments_data)} 条评论:\n")
            for i, comment in enumerate(comments_data, 1):
                print(f"评论 {i}:")
                print(f"时间: {comment['time']}")
                print(f"内容: {comment['content']}")
                print("-" * 50)
        else:
            print("未找到符合时间格式要求的评论")
            
    except requests.RequestException as e:
        print(f"网络请求错误: {e}")
    except Exception as e:
        print(f"发生错误: {e}")

if __name__ == "__main__":
    # 目标URL
    url = "https://finance.yahoo.co.jp/cm/message/1003350/3350"
    
    # 提取评论
    extract_sony_comments(url)