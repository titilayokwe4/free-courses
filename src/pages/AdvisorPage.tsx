import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Brain,
  ArrowLeft,
  Loader2,
  Sparkles,
  Check,
  Layers,
} from 'lucide-react';
import { Header } from '../components/Header';
import { COURSES } from '../data/courses';
import { INSTRUCTORS } from '../data/instructors';
import { useCart } from '../context/CartContext';
import { LearningAdvantage } from '../components/LearningAdvantage';
import { Footer } from '../components/Footer';

interface QuizAnswers {
  goal: string;
  level: string;
  field: string;
  time: string;
}

const GOAL_OPTIONS = [
  {
    title: 'Switch careers',
    icon: '🚀',
    subtitle: 'Transition into a new field',
  },
  {
    title: 'Level up at work',
    icon: '📈',
    subtitle: 'Get better at what I already do',
  },
  {
    title: 'Creative hobby',
    icon: '🎨',
    subtitle: "Explore something I'm passionate about",
  },
  {
    title: 'Grow my business',
    icon: '💼',
    subtitle: 'Build skills to run or grow a business',
  },
];

const LEVEL_OPTIONS = [
  {
    title: 'Just starting out',
    icon: '🌱',
    subtitle: "I'm new to this area",
  },
  {
    title: 'Some experience',
    icon: '⚡',
    subtitle: 'I know the basics already',
  },
  {
    title: 'Pretty advanced',
    icon: '🏆',
    subtitle: 'I want to push to expert level',
  },
];

const FIELD_OPTIONS = [
  {
    title: 'Design & UX',
    icon: '✏️',
    subtitle: 'UI, branding, visual identity',
  },
  {
    title: 'Tech & Code',
    icon: '💻',
    subtitle: 'Web, apps, programming',
  },
  {
    title: 'Photo & Video',
    icon: '📷',
    subtitle: 'Photography, film, editing',
  },
  {
    title: 'Marketing & Growth',
    icon: '📣',
    subtitle: 'SEO, ads, content strategy',
  },
  {
    title: 'Illustration & Art',
    icon: '✒️',
    subtitle: 'Drawing, digital illustration',
  },
  {
    title: '3D & Motion',
    icon: '🎬',
    subtitle: '3D modelling, animation',
  },
];

const TIME_OPTIONS = [
  {
    title: '1–2 hours',
    icon: '🌙',
    subtitle: 'Short sessions when I can',
  },
  {
    title: '3–5 hours',
    icon: '☀️',
    subtitle: 'A few evenings a week',
  },
  {
    title: '6+ hours',
    icon: '🔥',
    subtitle: "I'm fully committed",
  },
];

export const AdvisorPage: React.FC = () => {
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart();

  const [step, setStep] = useState(1);

  const [answers, setAnswers] = useState<QuizAnswers>({
    goal: '',
    level: '',
    field: '',
    time: '',
  });

  const [isCalculating, setIsCalculating] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [recommendedCourseId, setRecommendedCourseId] =
    useState<string | null>(null);

  // Scroll to top whenever the quiz changes step.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [step, isCalculating]);

  const handleSelectOption = (
    key: keyof QuizAnswers,
    value: string
  ) => {
    setSelectedOption(value);

    setTimeout(() => {
      setAnswers((prev) => ({
        ...prev,
        [key]: value,
      }));

      setSelectedOption(null);

      if (step < 4) {
        setStep((prev) => prev + 1);
      } else {
        setIsCalculating(true);
      }
    }, 350);
  };

  // Recommendation simulation.
  useEffect(() => {
    if (!isCalculating) return;

    const timer = setTimeout(() => {
      setIsCalculating(false);

      const field = answers.field;

      let primaryId = 'complete-ui-ux-design-masterclass';

      if (field === 'Design & UX') {
        primaryId = 'complete-ui-ux-design-masterclass';
      } else if (field === 'Tech & Code') {
        primaryId = 'advanced-react-typescript';
      } else if (field === 'Photo & Video') {
        primaryId = 'portrait-photography-essentials';
      } else if (field === 'Marketing & Growth') {
        primaryId = 'growth-marketing-blueprint';
      } else if (field === 'Illustration & Art') {
        primaryId = 'digital-illustration-masterclass';
      } else if (field === '3D & Motion') {
        primaryId = 'motion-design-with-after-effects';
      }

      setRecommendedCourseId(primaryId);
      setStep(5);
    }, 1500);

    return () => clearTimeout(timer);
  }, [isCalculating, answers]);

  const handleBack = () => {
    if (step > 1 && step < 5) {
      setStep((prev) => prev - 1);
    } else if (step === 5) {
      handleReset();
    } else {
      navigate('/courses');
    }
  };

  const handleReset = () => {
    setStep(1);
    setRecommendedCourseId(null);
    setSelectedOption(null);

    setAnswers({
      goal: '',
      level: '',
      field: '',
      time: '',
    });
  };

  const currentCourse =
    COURSES.find((course) => course.id === recommendedCourseId) ||
    COURSES[0];

  const handleAddToCart = (course: typeof COURSES[0]) => {
    const isCourseAdded = cartItems.some(
      (item) =>
        item.title.toLowerCase() === course.title.toLowerCase()
    );

    if (isCourseAdded) return;

    addToCart({
      title: course.title,
      instructor: course.instructor,
      image: course.image,
      price: course.price,
    });
  };

  const isCourseInCart = (course: typeof COURSES[0]) => {
    return cartItems.some(
      (item) =>
        item.title.toLowerCase() === course.title.toLowerCase()
    );
  };

  const getDynamicSubtitle = () => {
    let goalPhrase = 'transition into a new career';

    if (answers.goal === 'Level up at work') {
      goalPhrase = 'level up at work';
    } else if (answers.goal === 'Creative hobby') {
      goalPhrase = 'explore a creative hobby';
    } else if (answers.goal === 'Grow my business') {
      goalPhrase = 'grow your business';
    }

    let levelPhrase = 'scratch';

    if (answers.level === 'Some experience') {
      levelPhrase = 'a basic foundation';
    } else if (answers.level === 'Pretty advanced') {
      levelPhrase = 'an advanced level';
    }

    let fieldPhrase = answers.field || 'Design';

    if (answers.field === 'Design & UX') {
      fieldPhrase = 'Design';
    } else if (answers.field === 'Photo & Video') {
      fieldPhrase = 'Photography & Video';
    } else if (answers.field === 'Illustration & Art') {
      fieldPhrase = 'Illustration';
    }

    return `Based on your goal to ${goalPhrase}, starting from ${levelPhrase} in the ${fieldPhrase} space, here are your perfect matches.`;
  };

  const getCourseDescription = (courseId: string) => {
    if (courseId === 'complete-ui-ux-design-masterclass') {
      return 'Master the full design process from research to high-fidelity prototypes. Learn Figma, design systems, user research, and...';
    }

    if (courseId === 'advanced-react-typescript') {
      return 'Dive deep into React and TypeScript. Master advanced patterns, performance optimization, state management, and enterprise coding...';
    }

    if (courseId === 'portrait-photography-essentials') {
      return 'Learn how to capture stunning portraits. Master studio lighting, natural compositions, editing in Lightroom, and directing subjects...';
    }

    if (courseId === 'motion-design-with-after-effects') {
      return 'Bring your designs to life with After Effects. Master motion graphics, keyframing, typography, and professional VFX workflows...';
    }

    if (courseId === 'digital-illustration-masterclass') {
      return 'Express your creativity digitally. Learn custom brush techniques, shading, character design, and painting in Procreate or Photoshop...';
    }

    if (courseId === 'growth-marketing-blueprint') {
      return 'Accelerate your business or career growth. Master advanced SEO strategies, paid advertisement funnels, copy writing, and Google Analytics...';
    }

    return 'Learn industry-standard skills with expert-led practical lessons, live projects, and lifetime learning advantages.';
  };

  const getAlternativeCourses = () => {
    const list = COURSES.filter(
      (course) => course.id !== recommendedCourseId
    );

    if (recommendedCourseId === 'complete-ui-ux-design-masterclass') {
      return [
        COURSES.find(
          (course) => course.id === 'portrait-photography-essentials'
        ) || list[0],

        COURSES.find(
          (course) => course.id === 'digital-illustration-masterclass'
        ) || list[1],
      ];
    }

    return [list[0], list[1]];
  };

  const renderDots = () => {
    return (
      <div className="flex items-center gap-1.5">
        {Array.from({ length: step }).map((_, idx) => {
          const isCurrent = idx === step - 1;

          return (
            <span
              key={idx}
              className={`
                w-2 h-2 rounded-full
                transition-all duration-300
                ${
                  isCurrent
                    ? 'bg-brand-primary shadow-sm shadow-brand-primary/30'
                    : 'bg-brand-secondary'
                }
              `}
            />
          );
        })}
      </div>
    );
  };

  const renderStepOptions = (
    options: {
      title: string;
      icon: string;
      subtitle: string;
    }[],
    key: keyof QuizAnswers,
    isTwoColumn = false
  ) => {
    return (
      <div
        className={`
          grid gap-4 max-w-3xl mx-auto
          ${
            isTwoColumn
              ? 'grid-cols-1 md:grid-cols-2'
              : 'grid-cols-1 max-w-2xl'
          }
        `}
      >
        {options.map((opt) => {
          const isSelected = selectedOption === opt.title;

          return (
            <button
              key={opt.title}
              onClick={() => handleSelectOption(key, opt.title)}
              className={`
                w-full text-left
                border rounded-2xl p-5
                flex items-center gap-4
                transition-all duration-300
                hover:shadow-md
                cursor-pointer
                group

                ${
                  isSelected
                    ? 'border-brand-secondary bg-brand-secondary/5 dark:bg-brand-secondary/10'
                    : `
                      bg-white dark:bg-surface
                      border-gray-200 dark:border-border
                      hover:border-brand-secondary/60
                      hover:bg-brand-secondary/5
                      dark:hover:bg-brand-secondary/5
                    `
                }
              `}
            >
              <span
                className={`
                  text-3xl p-2.5
                  bg-gray-50 dark:bg-surface-hover
                  rounded-xl
                  flex-shrink-0
                  group-hover:scale-105
                  transition-transform

                  ${
                    isSelected
                      ? 'bg-brand-secondary/10 dark:bg-brand-secondary/15'
                      : ''
                  }
                `}
              >
                {opt.icon}
              </span>

              <div>
                <h3
                  className={`
                    font-bold
                    text-gray-950 dark:text-text-primary
                    transition-colors

                    ${
                      isSelected
                        ? 'text-brand-secondary'
                        : 'group-hover:text-brand-primary dark:group-hover:text-brand-secondary'
                    }
                  `}
                >
                  {opt.title}
                </h3>

                <p className="text-xs text-gray-500 dark:text-text-secondary mt-0.5">
                  {opt.subtitle}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div
      className="
        min-h-screen
        bg-[#FAFBFC] dark:bg-background
        font-sans
        flex flex-col
        transition-colors duration-300
      "
    >
      <Header />

      {/* =====================================================
          PROGRESS / RESULTS HEADER
      ===================================================== */}
      <div
        className="
          bg-[#0B0F3B] dark:bg-background
          text-white
          py-12
          transition-colors duration-300
        "
      >
        <div className="max-w-4xl mx-auto px-4">

          <button
            onClick={handleBack}
            className="
              inline-flex items-center gap-1.5
              text-xs font-semibold
              text-gray-400
              hover:text-white
              mb-6
              transition-colors
              cursor-pointer
            "
          >
            <ArrowLeft size={14} />
            {step === 5 ? 'Restart quiz' : 'Back'}
          </button>

          {step === 5 ? (
            <div
              className="text-center max-w-2xl mx-auto py-4 animate-fade-in"
            >
              <div
                className="
                  w-12 h-12
                  bg-brand-secondary/10
                  text-brand-secondary
                  rounded-2xl
                  flex items-center justify-center
                  border border-brand-secondary/30
                  mx-auto mb-4
                "
              >
                <Brain size={24} />
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Your personalised picks are ready
              </h1>

              <p className="text-gray-300 text-sm leading-relaxed max-w-xl mx-auto">
                {getDynamicSubtitle()}
              </p>
            </div>
          ) : (
            <div
              className="flex items-start gap-4 animate-fade-in"
              key={`header-step-${step}`}
            >
              <div
                className="
                  w-10 h-10
                  bg-brand-secondary/10
                  text-brand-secondary
                  rounded-xl
                  flex items-center justify-center
                  border border-brand-secondary/30
                  flex-shrink-0
                "
              >
                <Brain size={20} />
              </div>

              <div className="flex-1">

                <h3
                  className="
                    text-xs font-bold
                    text-brand-secondary
                    tracking-wider uppercase
                  "
                >
                  AI Course Advisor
                </h3>

                <h1 className="text-lg font-bold text-white">
                  freecourses · personalised for you
                </h1>

                <div className="mt-6 space-y-2">

                  <div
                    className="
                      flex justify-between
                      text-[10px]
                      text-gray-400
                      font-bold
                      uppercase
                      tracking-wider
                    "
                  >
                    <span>Step {step} of 4</span>
                    <span>Almost there</span>
                  </div>

                  <div
                    className="
                      w-full
                      bg-white/10
                      h-1.5
                      rounded-full
                      overflow-hidden
                    "
                  >
                    <div
                      className="
                        bg-brand-secondary
                        h-full
                        transition-all duration-300
                      "
                      style={{
                        width: `${step * 25}%`,
                      }}
                    />
                  </div>

                </div>
              </div>
            </div>
          )}
        </div>
      </div>


      {/* =====================================================
          QUIZ BODY
      ===================================================== */}
      <main
        className="
          flex-grow
          max-w-4xl
          mx-auto
          w-full
          px-4
          py-16
        "
      >
        {isCalculating ? (
          <div
            className="
              flex flex-col
              items-center
              justify-center
              text-center
              py-20
              space-y-4
              animate-fade-in
            "
          >
            <Loader2
              size={44}
              className="animate-spin text-brand-primary dark:text-brand-secondary"
            />

            <h2 className="text-xl font-bold text-gray-900 dark:text-text-primary">
              Finding your perfect match...
            </h2>

            <p className="text-gray-500 dark:text-text-secondary text-sm">
              Our AI is analyzing your goals and skill levels.
            </p>
          </div>
        ) : step === 1 ? (
          <div
            key="step-1"
            className="space-y-8 animate-fade-in"
          >
            <div className="text-center md:text-left max-w-2xl mx-auto">
              <h2
                className="
                  text-2xl md:text-3xl
                  font-extrabold
                  text-[#0B0F3B]
                  dark:text-text-primary
                  mb-2
                "
              >
                What's your main learning goal?
              </h2>

              <p className="text-gray-500 dark:text-text-secondary text-sm">
                Pick the one that fits you best right now.
              </p>
            </div>

            {renderStepOptions(GOAL_OPTIONS, 'goal', false)}
          </div>
        ) : step === 2 ? (
          <div
            key="step-2"
            className="space-y-8 animate-fade-in"
          >
            <div className="text-center md:text-left max-w-2xl mx-auto">
              <h2
                className="
                  text-2xl md:text-3xl
                  font-extrabold
                  text-[#0B0F3B]
                  dark:text-text-primary
                  mb-2
                "
              >
                What's your current experience level?
              </h2>

              <p className="text-gray-500 dark:text-text-secondary text-sm">
                Be honest — we'll tailor the recommendation perfectly.
              </p>
            </div>

            {renderStepOptions(LEVEL_OPTIONS, 'level', false)}
          </div>
        ) : step === 3 ? (
          <div
            key="step-3"
            className="space-y-8 animate-fade-in"
          >
            <div className="text-center md:text-left max-w-3xl mx-auto">
              <h2
                className="
                  text-2xl md:text-3xl
                  font-extrabold
                  text-[#0B0F3B]
                  dark:text-text-primary
                  mb-2
                "
              >
                Which area excites you most?
              </h2>

              <p className="text-gray-500 dark:text-text-secondary text-sm">
                Choose what pulls you in the most.
              </p>
            </div>

            {renderStepOptions(FIELD_OPTIONS, 'field', true)}
          </div>
        ) : step === 4 ? (
          <div
            key="step-4"
            className="space-y-8 animate-fade-in"
          >
            <div className="text-center md:text-left max-w-2xl mx-auto">
              <h2
                className="
                  text-2xl md:text-3xl
                  font-extrabold
                  text-[#0B0F3B]
                  dark:text-text-primary
                  mb-2
                "
              >
                How much time can you dedicate weekly?
              </h2>

              <p className="text-gray-500 dark:text-text-secondary text-sm">
                No judgement — we'll find something that fits your schedule.
              </p>
            </div>

            {renderStepOptions(TIME_OPTIONS, 'time', false)}
          </div>
        ) : (
          /* =================================================
             STEP 5 — RESULTS
          ================================================= */
          <div className="space-y-12 animate-fade-in max-w-3xl mx-auto">

            {/* Best Match */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles
                  className="
                    text-brand-secondary
                    fill-brand-secondary
                    stroke-[2.5]
                  "
                  size={18}
                />

                <span
                  className="
                    text-base
                    font-extrabold
                    text-[#0B0F3B]
                    dark:text-text-primary
                  "
                >
                  Best match for you
                </span>
              </div>


              {/* Recommended Course */}
              <div
                className="
                  bg-white dark:bg-surface
                  border border-gray-100 dark:border-border
                  rounded-3xl
                  overflow-hidden
                  shadow-sm
                  flex flex-col md:flex-row
                  transition-all duration-300
                  hover:shadow-md
                "
              >
                <div
                  className="
                    w-full md:w-[280px]
                    h-[210px] md:h-auto
                    flex-shrink-0
                    relative overflow-hidden
                  "
                >
                  <img
                    src={currentCourse.image}
                    alt={currentCourse.title}
                    className="w-full h-full object-cover"
                  />
                </div>


                <div
                  className="
                    p-6 md:p-8
                    flex-1
                    flex flex-col
                    justify-between
                  "
                >
                  <div>

                    <span
                      className="
                        inline-block
                        text-[11px]
                        font-bold
                        text-brand-secondary
                        bg-brand-secondary/10
                        px-2.5 py-1
                        rounded-md
                        mb-2
                      "
                    >
                      {currentCourse.level}
                    </span>

                    <h3
                      className="
                        text-xl
                        font-bold
                        text-gray-950
                        dark:text-text-primary
                        mb-1.5
                        leading-tight
                      "
                    >
                      {currentCourse.title}
                    </h3>

                    <div
                      className="
                        flex items-center gap-1.5
                        text-xs
                        text-gray-500
                        dark:text-text-secondary
                        mb-3
                        font-semibold
                      "
                    >
                      <span>{currentCourse.instructor}</span>
                      <span className="text-amber-400 text-sm">★</span>
                    </div>

                    <p
                      className="
                        text-sm
                        text-gray-500
                        dark:text-text-secondary
                        leading-relaxed
                        mb-4
                      "
                    >
                      {getCourseDescription(currentCourse.id)}
                    </p>

                  </div>


                  <div
                    className="
                      flex items-center
                      justify-between
                      border-t
                      border-gray-100 dark:border-border
                      pt-4 mt-2
                    "
                  >
                    <span
                      className="
                        text-lg
                        font-extrabold
                        text-[#0B0F3B]
                        dark:text-text-primary
                      "
                    >
                      ₦{currentCourse.price.toLocaleString()}
                    </span>

                    <div className="flex gap-2.5">

                      <button
                        onClick={() => handleAddToCart(currentCourse)}
                        className={`
                          px-5 py-2.5
                          rounded-xl
                          text-xs
                          font-bold
                          transition-all
                          flex items-center justify-center gap-1.5
                          text-white

                          ${
                            isCourseInCart(currentCourse)
                              ? `
                                bg-brand-secondary
                                hover:bg-brand-secondary-hover
                                shadow-sm
                                shadow-brand-secondary/20
                              `
                              : `
                                bg-brand-primary
                                hover:bg-brand-primary-hover
                                shadow-sm
                                shadow-brand-primary/20
                              `
                          }
                        `}
                      >
                        {isCourseInCart(currentCourse) ? (
                          <>
                            <Check size={14} className="stroke-[3]" />
                            <span>Added</span>
                          </>
                        ) : (
                          <span>Add to cart</span>
                        )}
                      </button>


                      <button
                        onClick={() =>
                          navigate(`/courses/${currentCourse.id}`)
                        }
                        className="
                          px-5 py-2.5
                          rounded-xl
                          text-xs
                          font-bold
                          text-gray-700
                          dark:text-text-secondary
                          bg-white
                          dark:bg-surface-hover
                          border
                          border-gray-200
                          dark:border-border
                          hover:bg-gray-50
                          dark:hover:bg-surface
                          transition-colors
                          flex items-center gap-1
                        "
                      >
                        <span>View course</span>
                        <span className="text-sm">→</span>
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* Recommended Instructor */}
            <div
              className="
                max-w-3xl mx-auto
                bg-white dark:bg-surface
                border border-gray-100 dark:border-border
                rounded-2xl
                p-5
                flex items-center justify-between
                shadow-sm
              "
            >
              <div className="flex items-center gap-4">

                <div
                  className="
                    w-12 h-12
                    rounded-full
                    bg-brand-primary
                    flex items-center justify-center
                    text-white
                    text-lg
                    font-bold
                    flex-shrink-0
                  "
                >
                  {currentCourse.instructor.charAt(0)}
                </div>

                <div>

                  <span
                    className="
                      block
                      text-[10px]
                      font-bold
                      text-gray-400
                      dark:text-text-tertiary
                      uppercase
                      tracking-wider
                      mb-0.5
                    "
                  >
                    Recommended instructor
                  </span>

                  <h4
                    className="
                      text-base
                      font-extrabold
                      text-gray-950
                      dark:text-text-primary
                      leading-tight
                    "
                  >
                    {currentCourse.instructor}
                  </h4>

                  <span
                    className="
                      block
                      text-xs
                      text-gray-500
                      dark:text-text-secondary
                      mt-0.5
                    "
                  >
                    expert · {currentCourse.duration} of content
                  </span>

                </div>
              </div>

              <button
                onClick={() => {
                  const inst = INSTRUCTORS.find(
                    (i) =>
                      i.name.toLowerCase() ===
                      currentCourse.instructor.toLowerCase()
                  );

                  const slug = inst ? inst.id : 'sofia-reyes';

                  navigate(`/instructors/${slug}`);
                }}
                className="
                  px-4 py-2
                  bg-white dark:bg-surface-hover
                  border border-gray-200 dark:border-border
                  rounded-xl
                  text-xs font-bold
                  text-gray-700
                  dark:text-text-secondary
                  hover:bg-gray-50
                  dark:hover:bg-surface
                  transition-colors
                  flex items-center gap-1
                "
              >
                <span>View profile</span>
                <span>→</span>
              </button>
            </div>


            {/* Alternative Picks */}
            <div>
              <div className="flex items-center gap-2 mb-4">

                <Layers
                  className="
                    text-[#0B0F3B]
                    dark:text-text-primary
                    stroke-[2.5]
                  "
                  size={18}
                />

                <h3
                  className="
                    text-base
                    font-extrabold
                    text-[#0B0F3B]
                    dark:text-text-primary
                  "
                >
                  You might also like
                </h3>

              </div>


              <div className="space-y-3">

                {getAlternativeCourses().map((course) => (
                  <div
                    key={course.id}
                    className="
                      bg-white dark:bg-surface
                      border border-gray-100 dark:border-border
                      rounded-2xl
                      p-3
                      flex items-center justify-between
                      shadow-sm
                      transition-all duration-300
                      hover:shadow-md
                    "
                  >
                    <div className="flex items-center gap-3">

                      <img
                        src={course.image}
                        alt={course.title}
                        className="
                          w-16 h-10
                          md:w-20 md:h-12
                          rounded-lg
                          object-cover
                          flex-shrink-0
                        "
                      />

                      <div>
                        <h4
                          className="
                            text-sm
                            font-bold
                            text-gray-950
                            dark:text-text-primary
                            line-clamp-1
                            leading-snug
                          "
                        >
                          {course.title}
                        </h4>

                        <p
                          className="
                            text-xs
                            text-gray-500
                            dark:text-text-secondary
                            mt-0.5
                          "
                        >
                          {course.instructor} ·{' '}
                          {course.level.toLowerCase()}
                        </p>
                      </div>

                    </div>


                    <div className="flex items-center gap-4">

                      <span
                        className="
                          text-sm
                          font-extrabold
                          text-gray-950
                          dark:text-text-primary
                        "
                      >
                        ₦{course.price.toLocaleString()}
                      </span>

                      <button
                        onClick={() =>
                          navigate(`/courses/${course.id}`)
                        }
                        className="
                          px-4 py-1.5
                          bg-white dark:bg-surface-hover
                          border border-gray-200 dark:border-border
                          rounded-lg
                          text-xs
                          font-bold
                          text-gray-700
                          dark:text-text-secondary
                          hover:bg-gray-50
                          dark:hover:bg-surface
                          transition-colors
                        "
                      >
                        View
                      </button>

                    </div>
                  </div>
                ))}

              </div>
            </div>


            {/* Bottom Actions */}
            <div
              className="
                flex flex-col sm:flex-row
                gap-4
                max-w-3xl mx-auto
                pt-6
                border-t
                border-gray-100 dark:border-border
              "
            >

              <button
                onClick={handleReset}
                className="
                  flex-1
                  py-3
                  text-center
                  bg-white dark:bg-surface-hover
                  border border-gray-200 dark:border-border
                  rounded-xl
                  text-sm
                  font-bold
                  text-[#0B0F3B]
                  dark:text-text-primary
                  hover:bg-gray-50
                  dark:hover:bg-surface
                  transition-colors
                  cursor-pointer
                "
              >
                Retake the quiz
              </button>


              <button
                onClick={() => navigate('/courses')}
                className="
                  flex-1
                  py-3
                  text-center
                  bg-brand-secondary
                  hover:bg-brand-secondary-hover
                  rounded-xl
                  text-sm
                  font-bold
                  text-white
                  transition-colors
                  cursor-pointer
                  flex items-center justify-center gap-1.5
                  shadow-sm
                  shadow-brand-secondary/20
                "
              >
                <span>Browse all courses</span>
                <span className="text-sm">→</span>
              </button>

            </div>

          </div>
        )}


        {/* Bottom Quiz Controls */}
        {!isCalculating && step <= 4 && (
          <div
            className="
              flex items-center
              justify-between
              max-w-2xl mx-auto
              mt-12
              pt-6
              border-t
              border-gray-100 dark:border-border
            "
          >

            <button
              onClick={handleBack}
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                font-bold
                text-gray-700
                dark:text-text-secondary
                hover:text-brand-primary
                dark:hover:text-brand-secondary
                transition-colors
                cursor-pointer
              "
            >
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>

            {renderDots()}

          </div>
        )}
      </main>

      <LearningAdvantage />
      <Footer />


      {/* Animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
