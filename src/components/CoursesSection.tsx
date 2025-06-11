import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CoursesSection = () => {
  const courses = [
    {
      title: "Основы сбережений",
      description:
        "Как правильно копить деньги и создавать финансовую подушку безопасности",
      level: "Начальный",
      duration: "4 недели",
      icon: "PiggyBank",
      color: "bg-green-100 text-green-700",
      progress: 0,
      lessons: 12,
    },
    {
      title: "Первые инвестиции",
      description:
        "Введение в мир инвестиций: акции, облигации, ETF для начинающих",
      level: "Средний",
      duration: "6 недель",
      icon: "TrendingUp",
      color: "bg-blue-100 text-blue-700",
      progress: 0,
      lessons: 18,
    },
    {
      title: "Бюджетирование",
      description: "Планирование личного бюджета и контроль расходов",
      level: "Начальный",
      duration: "3 недели",
      icon: "Calculator",
      color: "bg-purple-100 text-purple-700",
      progress: 0,
      lessons: 10,
    },
    {
      title: "Криптовалюты",
      description: "Безопасное изучение мира цифровых валют и блокчейна",
      level: "Продвинутый",
      duration: "8 недель",
      icon: "Coins",
      color: "bg-orange-100 text-orange-700",
      progress: 0,
      lessons: 24,
    },
    {
      title: "Кредиты и займы",
      description: "Как правильно брать кредиты и избегать долговых ловушек",
      level: "Средний",
      duration: "5 недель",
      icon: "CreditCard",
      color: "bg-red-100 text-red-700",
      progress: 0,
      lessons: 15,
    },
    {
      title: "Предпринимательство",
      description: "Основы создания своего бизнеса и финансового планирования",
      level: "Продвинутый",
      duration: "10 недель",
      icon: "Lightbulb",
      color: "bg-yellow-100 text-yellow-700",
      progress: 0,
      lessons: 30,
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Начальный":
        return "bg-green-100 text-green-800";
      case "Средний":
        return "bg-yellow-100 text-yellow-800";
      case "Продвинутый":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Курсы финансовой грамотности
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Структурированные программы обучения от базовых навыков до
            продвинутых стратегий
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-3 rounded-xl ${course.color}`}>
                    <Icon name={course.icon as any} size={24} />
                  </div>
                  <Badge
                    variant="secondary"
                    className={getLevelColor(course.level)}
                  >
                    {course.level}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {course.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="BookOpen" size={16} />
                    <span>{course.lessons} уроков</span>
                  </div>
                </div>

                <Button className="w-full group-hover:bg-purple-600 transition-colors">
                  <Icon name="Play" size={16} className="mr-2" />
                  Начать курс
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
