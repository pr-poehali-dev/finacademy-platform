import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Icon name="TrendingUp" size={20} />
            <span className="text-sm font-medium">
              Финансовая грамотность 2025
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Финансовая академия
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              молодежи
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Изучай финансы интерактивно! Видеолекции, практические задания и
            игровые элементы для молодежи 14-25 лет
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-white text-purple-700 hover:bg-purple-50 font-semibold px-8 py-3"
          >
            <Icon name="Play" size={20} className="mr-2" />
            Начать обучение
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-purple-700 px-8 py-3"
          >
            <Icon name="Users" size={20} className="mr-2" />
            Присоединиться к сообществу
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-purple-100">
            <Icon name="BookOpen" size={24} />
            <span className="font-medium">50+ видеолекций</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-purple-100">
            <Icon name="Users" size={24} />
            <span className="font-medium">Живые вебинары</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-purple-100">
            <Icon name="Trophy" size={24} />
            <span className="font-medium">Игровые задания</span>
          </div>
        </div>
      </div>

      <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-400/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
