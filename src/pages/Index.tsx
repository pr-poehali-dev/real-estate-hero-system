import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState<'course' | 'workbook' | 'consultation'>('course');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openDialog = (type: 'course' | 'workbook' | 'consultation') => {
    setDialogType(type);
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Заявка:', { type: dialogType, ...formData });
    setIsDialogOpen(false);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const dialogTitles = {
    course: 'Получить бесплатный мини-курс',
    workbook: 'Забрать рабочую тетрадь (790 ₽)',
    consultation: 'Записаться на бесплатный разбор'
  };

  const dialogDescriptions = {
    course: 'Оставьте заявку, и мы пришлём вам доступ к 5 урокам в Telegram',
    workbook: 'Оставьте заявку для оплаты рабочей тетради с 32 инструментами',
    consultation: 'Запишитесь на бесплатный разбор 60 минут с Оксаной'
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1A1F2C] to-[#2d3548] text-white px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
              Система, в которой клиенты приходят сами.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
              Для риэлторов по новостройкам.
            </p>
            <p className="text-base sm:text-lg text-gray-400">
              Пройди бесплатный мини-курс из 5 уроков и собери фундамент своей системы продаж в 2026 году.
            </p>
            <Button 
              onClick={() => openDialog('course')}
              size="lg" 
              className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full transition-all hover:scale-105 w-full sm:w-auto"
            >
              Получить мини-курс
            </Button>
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <Icon name="MessageCircle" size={16} />
              Все материалы и бонусы — в Telegram-канале Оксаны.
            </p>
          </div>
          <div className="relative animate-scale-in">
            <img 
              src="https://cdn.poehali.dev/files/7f3a33e4-a2fc-4bf4-838c-7571555a64b6.JPG" 
              alt="Оксана Никитюк"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-12 md:py-20 px-4 md:px-6 bg-[#f5f5f7]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-[#1A1F2C]">
            Кто ведёт мини-курс и почему мне можно доверять
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <img 
              src="https://cdn.poehali.dev/files/34691445-afd3-443d-ac59-59c0059fd69d.JPG" 
              alt="Оксана за работой"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
            <div className="space-y-4 md:space-y-6">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                <strong className="text-[#9b87f5]">Оксана</strong> — наставник риэлторов, эксперт по первичке и автор системы, 
                которая помогает риэлторам работать спокойно, честно и стабильно зарабатывать 2–5 сделок в месяц.
              </p>
              <ul className="space-y-3">
                {[
                  '7 лет на рынке новостроек',
                  'Сильный личный бренд',
                  'Партнёрская модель продаж',
                  'Клиенты приходят по рекомендациям',
                  'Честность и открытость вместо навязывания',
                  'Системный подход в маркетинге и работе с покупателем'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-[#9b87f5] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-6 bg-[#9b87f5] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
          <div className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">52</div>
          <h3 className="text-2xl sm:text-3xl font-bold">Мой путь — не теория. Я прошла всё сама.</h3>
          <p className="text-lg sm:text-xl leading-relaxed">
            За один период я закрыла <strong>52 квартиры в новостройках</strong>.
          </p>
          <p className="text-base sm:text-lg opacity-90 max-w-3xl mx-auto">
            Не потому что бегала сутками по показам. А потому что выстроила систему: 
            честная работа с клиентами, партнёрская модель, личный бренд, 
            доверие, которое не нужно продавать.
          </p>
          <p className="text-base sm:text-lg font-semibold">
            Эта система работает и в 2026 году — и именно её я передаю своим ученикам и в мини-курсе.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-6 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-[#1A1F2C]">
            Почему старые методы больше не работают в 2026 году
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
            {[
              { icon: 'User', text: 'Клиенты выбирают не цену — а человека' },
              { icon: 'XCircle', text: 'Скрипты, дожимы и манипуляции вызывают отторжение' },
              { icon: 'Heart', text: 'Рынок стал эмоциональным' },
              { icon: 'Shield', text: 'Нужна честность и открытая работа' },
              { icon: 'TrendingDown', text: 'Риэлтор-продавец проигрывает' },
              { icon: 'TrendingUp', text: 'Риэлтор-партнёр выигрывает' }
            ].map((item, idx) => (
              <Card key={idx} className="p-4 md:p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 md:gap-4">
                  <Icon name={item.icon} className="text-[#9b87f5] flex-shrink-0" size={24} />
                  <p className="text-base md:text-lg text-gray-700">{item.text}</p>
                </div>
              </Card>
            ))}
          </div>
          <p className="text-center text-lg sm:text-xl mt-8 md:mt-12 text-gray-700">
            Чтобы расти в первичке, нужна новая модель — <strong className="text-[#9b87f5]">человеческая и системная</strong>.
          </p>
        </div>
      </section>

      <section id="course" className="py-12 md:py-20 px-4 md:px-6 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 md:mb-6 text-[#1A1F2C]">
            Что ты получишь в мини-курсе
          </h2>
          <p className="text-center text-lg sm:text-xl text-gray-600 mb-8 md:mb-12">
            5 коротких уроков, которые можно внедрять сразу
          </p>
          
          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            <AccordionItem value="lesson-0" className="bg-white rounded-lg px-4 md:px-6 shadow-sm">
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:text-[#9b87f5]">
                <div className="flex items-center gap-3">
                  <span className="text-[#9b87f5]">📹</span>
                  Урок 0 — Вступление (живое видео)
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Знакомство → зачем курс ведёт аватар → как работать с материалами.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="lesson-1" className="bg-white rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-lg font-semibold hover:text-[#9b87f5]">
                <div className="flex items-center gap-3">
                  <span className="text-[#9b87f5]">1️⃣</span>
                  Урок 1 — Кто такой современный риэлтор по первичке
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 space-y-2">
                <p>• Как изменился покупатель</p>
                <p>• Что работает сейчас, а что — устарело</p>
                <p>• Роль риэлтора в 2026</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="lesson-2" className="bg-white rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-lg font-semibold hover:text-[#9b87f5]">
                <div className="flex items-center gap-3">
                  <span className="text-[#9b87f5]">2️⃣</span>
                  Урок 2 — Как продавать себя без продаж
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 space-y-2">
                <p>• Партнёрская модель</p>
                <p>• 5 шагов к доверию</p>
                <p>• 4 ключевые ошибки, которые убивают сделку</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="lesson-3" className="bg-white rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-lg font-semibold hover:text-[#9b87f5]">
                <div className="flex items-center gap-3">
                  <span className="text-[#9b87f5]">3️⃣</span>
                  Урок 3 — Личная упаковка и бренд
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 space-y-2">
                <p>• Упаковка профиля</p>
                <p>• Формулы позиционирования</p>
                <p>• Визуал, шапка, контент</p>
                <p>• Как сделать так, чтобы профиль сам продавал</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="lesson-4" className="bg-white rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-lg font-semibold hover:text-[#9b87f5]">
                <div className="flex items-center gap-3">
                  <span className="text-[#9b87f5]">4️⃣</span>
                  Урок 4 — Система заявок
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 space-y-2">
                <p>• Telegram-воронки</p>
                <p>• Точки входа</p>
                <p>• Система контента</p>
                <p>• Как сделать так, чтобы клиенты сами доходили до заявки</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-8 md:mt-12">
            <Button 
              onClick={() => openDialog('course')}
              size="lg" 
              className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-6 rounded-full transition-all hover:scale-105 w-full sm:w-auto"
            >
              🔵 Получить доступ к мини-курсу
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-6 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-[#1A1F2C]">
            Чем мой подход отличается от остальных
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              'Партнёрская модель, а не «продажа любой ценой»',
              'Долгосрочные отношения с клиентом',
              'Честность как конкурентное преимущество',
              'Упаковка, которая работает на тебя',
              'Контент, который приносит заявки',
              'Система рекомендаций, которая растёт сама'
            ].map((item, idx) => (
              <Card key={idx} className="p-4 md:p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-[#9b87f5] flex-shrink-0 mt-1" size={24} />
                  <p className="text-sm md:text-base text-gray-700">{item}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-[#9b87f5] to-[#7E69AB] text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 md:mb-12">
            Результаты учеников, которые внедряют систему
          </h2>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 md:p-8">
            <div className="space-y-4 md:space-y-6">
              <p className="text-base sm:text-lg leading-relaxed">
                Моя ученица пришла без системы, без воронки, без личного бренда.
              </p>
              <p className="text-base sm:text-lg">За один месяц внедрения мы:</p>
              <ul className="space-y-3">
                {[
                  'упаковали профиль',
                  'настроили первые точки входа',
                  'сделали системный контент',
                  'выстроили партнёрские касания'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Icon name="Star" className="text-yellow-300" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center py-4 md:py-6">
                <div className="text-4xl sm:text-5xl font-bold mb-2">1 000 000 ₽</div>
                <p className="text-lg sm:text-xl">дохода за первый месяц на новостройках</p>
              </div>
              <p className="text-sm opacity-80 text-center italic">
                Результаты индивидуальны. Но система работает у всех, кто её внедряет.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-6 bg-[#f5f5f7]">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <Card className="p-4 md:p-6 hover:shadow-xl transition-shadow">
              <Icon name="Users" className="text-[#9b87f5] mb-4" size={32} />
              <p className="text-sm md:text-base text-gray-700">
                Клиент пришёл "просто посмотреть", в итоге купил квартиру и привёл трёх друзей — 
                из-за нормального человеческого подхода.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-xl transition-shadow">
              <Icon name="Heart" className="text-[#9b87f5] mb-4" size={40} />
              <p className="text-gray-700">
                Семья выбирала между двумя ЖК — Оксана рекомендовала более выгодный объект, 
                хотя её комиссия была меньше. Через 2 месяца пришла сестра.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-xl transition-shadow">
              <Icon name="TrendingUp" className="text-[#9b87f5] mb-4" size={40} />
              <p className="text-gray-700">
                Риэлтор из региона получил первые входящие заявки за 2 недели — 
                только от корректировки позиционирования.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-6 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 md:mb-6 text-[#1A1F2C]">
            Хочешь ускориться?
          </h2>
          <p className="text-xl sm:text-2xl text-center mb-8 md:mb-12 text-gray-700">
            Забери мою рабочую тетрадь из <strong className="text-[#9b87f5]">32 инструментов риэлтора</strong> по первичке
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <img 
              src="https://cdn.poehali.dev/files/b0a8783d-afbc-48ab-a2f1-03c33268d16e.JPG" 
              alt="Рабочая тетрадь"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
            <div className="space-y-4 md:space-y-6">
              <p className="text-lg text-gray-700">
                Это не PDF «почитать». Это — <strong>система действий на каждый день</strong>.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#1A1F2C]">4 категории источников клиентов:</h3>
                <ul className="space-y-2">
                  {['Прямые входящие', 'Digital', 'Партнёрства', 'Личный бренд'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-[#9b87f5] font-bold">{idx + 1}.</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#9b87f5]/10 p-6 rounded-xl">
                <p className="text-lg font-semibold mb-3">32 рабочих инструмента:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• что делать</li>
                  <li>• в какой последовательности</li>
                  <li>• формулировки</li>
                  <li>• примеры сообщений</li>
                  <li>• ежедневные шаги</li>
                </ul>
              </div>

              <div className="space-y-2">
                <p className="font-semibold text-gray-700">+ 3 бонуса:</p>
                <div className="space-y-1">
                  <p>🎁 Честные платежки 2026</p>
                  <p>🎁 10 сторителлов для риэлтора</p>
                  <p>🎁 15 диагностических вопросов клиенту</p>
                </div>
              </div>

              <div className="pt-4">
                <div className="text-2xl sm:text-3xl font-bold text-[#9b87f5] mb-2">790 ₽</div>
                <p className="text-sm text-gray-500 mb-4">(реальная ценность: 5–10 тысяч)</p>
                <Button 
                  onClick={() => openDialog('workbook')}
                  size="lg" 
                  className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white text-base sm:text-lg py-5 sm:py-6 rounded-full transition-all hover:scale-105"
                >
                  Забрать рабочую тетрадь (790 ₽)
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-[#1A1F2C] to-[#2d3548] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Готов работать иначе?
              </h2>
              <p className="text-xl sm:text-2xl">
                Тогда тебе нужно наставничество 1 на 1
              </p>
              <p className="text-base sm:text-lg text-gray-300">
                Мы выстроим твою систему работы в первичке: спокойную, честную и предсказуемую.
              </p>
              
              <div className="space-y-3">
                {[
                  'упаковка',
                  'позиционирование',
                  'контент',
                  'система входящих',
                  'разбор профиля',
                  'точки входа',
                  'воронки',
                  'партнёрские касания',
                  'рост до 2–5 сделок в месяц'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Icon name="Sparkles" className="text-[#9b87f5]" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={() => openDialog('consultation')}
                size="lg" 
                className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-6 rounded-full transition-all hover:scale-105 w-full sm:w-auto"
              >
                ⚡️ Записаться на бесплатный разбор (60 минут)
              </Button>
            </div>
            <img 
              src="https://cdn.poehali.dev/files/003be071-dd5f-40e4-81b4-00685fa87a72.JPG" 
              alt="Наставничество"
              className="rounded-2xl shadow-2xl w-full h-auto order-first md:order-last"
            />
          </div>

          <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-6 md:gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-4 md:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-4">Как проходит наставничество:</h3>
              <ul className="space-y-3">
                {[
                  '1 созвон в неделю',
                  'домашние задания',
                  'примеры, шаблоны, инструкции',
                  'проверка профиля',
                  'корректировки по контенту',
                  'доступ к маркетологу'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Icon name="CheckCircle2" className="text-[#9b87f5]" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
              <img 
                src="https://cdn.poehali.dev/files/4fd1aed8-f89b-4137-bd5d-8a12f1590e51.JPG" 
                alt="Команда"
                className="rounded-xl w-full h-full object-cover"
              />
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1F2C]">
            Этот мини-курс — первый шаг. Дальше начинается твоя система.
          </h2>
          <p className="text-xl text-gray-600">Выбери, с чего начать:</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              onClick={() => openDialog('course')}
              size="lg" 
              variant="outline"
              className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white text-lg px-8 py-6 rounded-full"
            >
              Получить мини-курс
            </Button>
            <Button 
              onClick={() => openDialog('workbook')}
              size="lg" 
              className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white text-lg px-8 py-6 rounded-full"
            >
              Забрать «32 инструмента»
            </Button>
            <Button 
              onClick={() => openDialog('consultation')}
              size="lg" 
              className="bg-[#1A1F2C] hover:bg-[#2d3548] text-white text-lg px-8 py-6 rounded-full"
            >
              Записаться на разбор
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-[#1A1F2C] text-white py-8 md:py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 md:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold">Оксана Никитюк</h3>
            <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
              <a href="#" className="hover:text-[#9b87f5] transition-colors flex items-center gap-2">
                <Icon name="Send" size={20} />
                Telegram
              </a>
              <a href="#" className="hover:text-[#9b87f5] transition-colors flex items-center gap-2">
                <Icon name="Youtube" size={20} />
                YouTube
              </a>
            </div>
            <div className="flex justify-center gap-4 md:gap-6 text-xs sm:text-sm text-gray-400 flex-wrap">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Публичная оферта</a>
            </div>
          </div>
        </div>
      </footer>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-[#1A1F2C]">
              {dialogTitles[dialogType]}
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              {dialogDescriptions[dialogType]}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name">Имя *</Label>
              <Input
                id="name"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Телефон *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Комментарий</Label>
              <Textarea
                id="message"
                placeholder="Расскажите о себе или задайте вопрос"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white text-base sm:text-lg py-5 sm:py-6 rounded-full"
            >
              Отправить заявку
            </Button>
            <p className="text-xs text-gray-500 text-center">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;