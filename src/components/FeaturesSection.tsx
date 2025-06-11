import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const FeaturesSection = () => {
  const features = [
    {
      icon: "Video",
      title: "Видеолекции экспертов",
      description:
        "Качественный контент от практикующих финансовых консультантов и успешных инвесторов",
    },
    {
      icon: "Users",
      title: "Живые вебинары",
      description:
        "Еженедельные онлайн-встречи с возможностью задать вопросы напрямую экспертам",
    },
    {
      icon: "Gamepad2",
      title: "Игровые элементы",
      description:
        "Изучай финансы через симуляторы, квизы и интерактивные сценарии из реальной жизни",
    },
    {
      icon: "ClipboardCheck",
      title: "Практические тесты",
      description:
        "Закрепляй знания через тестирование и получай сертификаты о прохождении курсов",
    },
    {
      icon: "MessageCircle",
      title: "Сообщество",
      description:
        "Общайся с единомышленниками, делись опытом и находи решения финансовых вопросов вместе",
    },
    {
      icon: "Trophy",
      title: "Система достижений",
      description:
        "Получай баллы и награды за активность, мотивируй себя к изучению новых тем",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Как мы обучаем финансовой грамотности
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Современные методы обучения для максимального усвоения материала
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-indigo-50 hover:from-purple-100 hover:to-indigo-100"
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl text-white group-hover:scale-110 transition-transform duration-300">
                    <Icon name={feature.icon as any} size={32} />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">
                14-25
              </div>
              <div className="text-sm text-gray-600">возраст</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
              <div className="text-sm text-gray-600">уроков</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">
                24/7
              </div>
              <div className="text-sm text-gray-600">доступ</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
