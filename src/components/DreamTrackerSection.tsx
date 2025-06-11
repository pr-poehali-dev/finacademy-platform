import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const DreamTrackerSection = () => {
  const [dreamGoal, setDreamGoal] = useState(150000);
  const [currentAmount, setCurrentAmount] = useState(45000);
  const [addAmount, setAddAmount] = useState("");

  const progress = Math.min((currentAmount / dreamGoal) * 100, 100);
  const remainingAmount = dreamGoal - currentAmount;

  const handleAddMoney = () => {
    const amount = parseFloat(addAmount);
    if (amount > 0) {
      setCurrentAmount((prev) => prev + amount);
      setAddAmount("");
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-teal-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Трекер накоплений на мечту
          </h2>
          <p className="text-xl text-gray-600">
            Следи за прогрессом и достигай финансовых целей!
          </p>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm shadow-2xl border-0">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <Icon name="Target" size={32} className="text-emerald-600" />
                <h3 className="text-2xl font-bold text-gray-800">
                  Новый iPhone 15 Pro
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">
                    {currentAmount.toLocaleString("ru-RU")} ₽
                  </div>
                  <div className="text-gray-600">Накоплено</div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {Math.round(progress)}%
                  </div>
                  <div className="text-gray-600">Прогресс</div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    {remainingAmount > 0
                      ? remainingAmount.toLocaleString("ru-RU")
                      : 0}{" "}
                    ₽
                  </div>
                  <div className="text-gray-600">Осталось</div>
                </div>
              </div>

              {/* Прогресс-бар */}
              <div className="relative mb-8">
                <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2"
                    style={{ width: `${progress}%` }}
                  >
                    {progress > 15 && (
                      <span className="text-white text-sm font-semibold">
                        {Math.round(progress)}%
                      </span>
                    )}
                  </div>
                </div>
                <div className="absolute -top-8 left-0 text-sm text-gray-600">
                  0 ₽
                </div>
                <div className="absolute -top-8 right-0 text-sm text-gray-600">
                  {dreamGoal.toLocaleString("ru-RU")} ₽
                </div>
              </div>

              {/* Добавление денег */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Пополнить накопления
                </h4>
                <div className="flex gap-3 max-w-md mx-auto">
                  <Input
                    type="number"
                    placeholder="Сумма (₽)"
                    value={addAmount}
                    onChange={(e) => setAddAmount(e.target.value)}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleAddMoney}
                    className="bg-emerald-600 hover:bg-emerald-700 px-6"
                  >
                    <Icon name="Plus" size={20} className="mr-2" />
                    Добавить
                  </Button>
                </div>
              </div>

              {/* Мотивационное сообщение */}
              <div className="text-center">
                {progress >= 100 ? (
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6">
                    <Icon
                      name="PartyPopper"
                      size={48}
                      className="text-yellow-500 mx-auto mb-3"
                    />
                    <h4 className="text-2xl font-bold text-yellow-700 mb-2">
                      🎉 Поздравляем! Цель достигнута!
                    </h4>
                    <p className="text-yellow-600">
                      Ты собрал всю необходимую сумму для своей мечты!
                    </p>
                  </div>
                ) : progress >= 75 ? (
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                    <Icon
                      name="Zap"
                      size={32}
                      className="text-blue-500 mx-auto mb-3"
                    />
                    <h4 className="text-xl font-bold text-blue-700 mb-2">
                      Почти у цели! 🔥
                    </h4>
                    <p className="text-blue-600">
                      Осталось совсем немного — продолжай в том же духе!
                    </p>
                  </div>
                ) : progress >= 50 ? (
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                    <Icon
                      name="TrendingUp"
                      size={32}
                      className="text-purple-500 mx-auto mb-3"
                    />
                    <h4 className="text-xl font-bold text-purple-700 mb-2">
                      Половина пути пройдена! 💪
                    </h4>
                    <p className="text-purple-600">
                      Отличный прогресс! Ты на правильном пути к мечте.
                    </p>
                  </div>
                ) : (
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6">
                    <Icon
                      name="Rocket"
                      size={32}
                      className="text-emerald-500 mx-auto mb-3"
                    />
                    <h4 className="text-xl font-bold text-emerald-700 mb-2">
                      Отличное начало! 🚀
                    </h4>
                    <p className="text-emerald-600">
                      Каждый рубль приближает тебя к мечте. Продолжай копить!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Советы по накоплению */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white/60 backdrop-blur-sm border-emerald-200">
            <CardContent className="p-6 text-center">
              <Icon
                name="PiggyBank"
                size={32}
                className="text-emerald-600 mx-auto mb-3"
              />
              <h4 className="font-semibold text-gray-800 mb-2">
                Автоматические накопления
              </h4>
              <p className="text-gray-600 text-sm">
                Настрой автоперевод части зарплаты на накопительный счет
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-blue-200">
            <CardContent className="p-6 text-center">
              <Icon
                name="Coffee"
                size={32}
                className="text-blue-600 mx-auto mb-3"
              />
              <h4 className="font-semibold text-gray-800 mb-2">
                Метод "Кофе-челлендж"
              </h4>
              <p className="text-gray-600 text-sm">
                Откладывай деньги, которые обычно тратишь на кофе и снеки
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-purple-200">
            <CardContent className="p-6 text-center">
              <Icon
                name="Target"
                size={32}
                className="text-purple-600 mx-auto mb-3"
              />
              <h4 className="font-semibold text-gray-800 mb-2">
                Промежуточные цели
              </h4>
              <p className="text-gray-600 text-sm">
                Разбей большую цель на маленькие и отмечай каждое достижение
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DreamTrackerSection;
