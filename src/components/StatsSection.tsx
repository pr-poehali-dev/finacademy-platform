import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const StatsSection = () => {
  const stats = [
    {
      number: "5,000+",
      label: "Активных студентов",
      icon: "Users",
      color: "text-blue-600",
    },
    {
      number: "50+",
      label: "Часов контента",
      icon: "Clock",
      color: "text-green-600",
    },
    {
      number: "95%",
      label: "Завершают курсы",
      icon: "TrendingUp",
      color: "text-purple-600",
    },
    {
      number: "4.9/5",
      label: "Средняя оценка",
      icon: "Star",
      color: "text-yellow-600",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Академия в цифрах</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Результаты, которые говорят сами за себя
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6 ${stat.color}`}
                >
                  <Icon
                    name={stat.icon as any}
                    size={28}
                    className="text-white"
                  />
                </div>

                <div className="text-4xl font-bold mb-2">{stat.number}</div>

                <div className="text-purple-200 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Icon name="Award" size={32} className="text-yellow-400 mr-3" />
              <span className="text-2xl font-semibold">
                Сертифицированное обучение
              </span>
            </div>
            <p className="text-purple-200">
              Получайте официальные сертификаты о прохождении курсов, которые
              можно добавить в резюме и портфолио
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
