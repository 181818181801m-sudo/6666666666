# bot.py
from aiogram import Bot, Dispatcher, types
from aiogram.types import WebAppInfo

bot = Bot(token="YOUR_TOKEN")
dp = Dispatcher()

@dp.message()
async def start(message: types.Message):
    await message.answer("Играть в CLICKTON:", 
        reply_markup=types.ReplyKeyboardMarkup(keyboard=[
            [types.KeyboardButton(text="Open App", web_app=WebAppInfo(url="https://your-site.com"))]
        ], resize_keyboard=True))