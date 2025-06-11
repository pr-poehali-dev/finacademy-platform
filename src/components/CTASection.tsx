import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <div className="max-w-4xl mx-auto">
        <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mb-6">
                <Icon name="Rocket" size={36} className="text-white" />
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Начни свой путь к финансовой свободе
              </h2>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Присоединяйся к тысячам молодых людей, которые уже изменили своё
                отношение к деньгам
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-8 py-3 text-white font-semibold"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Начать бесплатно
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Задать вопрос
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div className="flex items-center justify-center gap-2">
                <Icon name="Check" size={16} className="text-green-500" />
                <span>Бесплатный доступ</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Icon name="Check" size={16} className="text-green-500" />
                <span>Без скрытых платежей</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Icon name="Check" size={16} className="text-green-500" />
                <span>Сертификаты включены</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
