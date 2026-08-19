import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  ArrowRight,
  Globe2,
} from 'lucide-react';

interface AfricanLocation {
  city: string;
  country: string;
  description: string;
}

const locations: AfricanLocation[] = [
  {
    city: 'Lagos',
    country: 'Nigeria',
    description: 'A major technology, business and creative hub in West Africa.',
  },
  {
    city: 'Kigali',
    country: 'Rwanda',
    description: 'A growing technology and innovation hub in East Africa.',
  },
  {
    city: 'Nairobi',
    country: 'Kenya',
    description: 'A leading technology and startup centre in East Africa.',
  },
  {
    city: 'Accra',
    country: 'Ghana',
    description: 'A vibrant centre for business, technology and creative industries.',
  },
  {
    city: 'Cairo',
    country: 'Egypt',
    description: 'One of Africa’s largest cities and a major regional business hub.',
  },
  {
    city: 'Johannesburg',
    country: 'South Africa',
    description: 'A major financial and commercial centre in Southern Africa.',
  },
  {
    city: 'Cape Town',
    country: 'South Africa',
    description: 'A leading destination for technology, design and innovation.',
  },
  {
    city: 'Addis Ababa',
    country: 'Ethiopia',
    description: 'A major political, economic and diplomatic centre in Africa.',
  },
];

export const AfricaMapPage: React.FC = () => {
  const [selectedLocation, setSelectedLocation] =
    useState<AfricanLocation>(locations[0]);

  return (
    <div className="min-h-screen bg-background text-text-primary">

      {/* Header */}
      <header className="border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-between h-16">

            <Link
              to="/"
              className="flex items-center"
            >
              <img
                src="/freecourses_logo.png"
                alt="FreeCourses"
                className="w-28"
              />
            </Link>

            <nav className="hidden md:flex items-center gap-6">

              <Link
                to="/courses"
                className="text-sm font-medium text-text-secondary hover:text-brand-secondary transition-colors"
              >
                Courses
              </Link>

              <Link
                to="/categories"
                className="text-sm font-medium text-text-secondary hover:text-brand-secondary transition-colors"
              >
                Categories
              </Link>

              <Link
                to="/instructors"
                className="text-sm font-medium text-text-secondary hover:text-brand-secondary transition-colors"
              >
                Instructors
              </Link>

              <Link
                to="/practice-labs"
                className="text-sm font-medium text-text-secondary hover:text-brand-secondary transition-colors"
              >
                Practice Labs
              </Link>

              <Link
                to="/africa"
                className="text-sm font-semibold text-brand-secondary"
              >
                Africa
              </Link>

            </nav>

          </div>

        </div>
      </header>


      {/* Hero */}
      <section className="bg-[#0B0F3B] text-white py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl">

            <div className="flex items-center gap-2 mb-4">

              <Globe2
                size={20}
                className="text-brand-primary"
              />

              <span className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                FreeCourses Africa
              </span>

            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Learn across Africa.
              <span className="block text-brand-primary">
                Connect with opportunity.
              </span>
            </h1>

            <p className="mt-5 text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl">
              Explore major African technology, business and
              learning communities from Lagos to Kigali,
              Nairobi and beyond.
            </p>

          </div>

        </div>

      </section>


      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Map Area */}
          <div className="lg:col-span-2">

            <div className="bg-surface border border-border rounded-3xl p-6 md:p-8">

              <div className="flex items-center justify-between mb-6">

                <div>

                  <h2 className="text-xl font-bold text-text-primary">
                    Explore Africa
                  </h2>

                  <p className="text-sm text-text-secondary mt-1">
                    Select a location to explore.
                  </p>

                </div>

                <Globe2
                  size={24}
                  className="text-brand-secondary"
                />

              </div>


              {/* Africa Map Illustration */}
              <div className="relative min-h-[480px] rounded-2xl bg-[#0B0F3B] overflow-hidden flex items-center justify-center">

                {/* Decorative Africa silhouette */}
                <div className="relative w-[260px] h-[360px] md:w-[330px] md:h-[430px]">

                  <div
                    className="
                      absolute
                      inset-0
                      bg-brand-primary/90
                      [clip-path:polygon(
                        43%_0%,
                        58%_5%,
                        68%_13%,
                        74%_23%,
                        84%_31%,
                        79%_42%,
                        85%_53%,
                        76%_63%,
                        70%_74%,
                        61%_83%,
                        57%_95%,
                        48%_100%,
                        42%_89%,
                        34%_82%,
                        28%_72%,
                        21%_62%,
                        17%_52%,
                        10%_42%,
                        15%_31%,
                        24%_24%,
                        31%_14%,
                        35%_5%
                      )]
                    "
                  />

                  {/* Lagos */}
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedLocation(locations[0])
                    }
                    className="absolute top-[48%] left-[23%] group"
                    aria-label="Lagos, Nigeria"
                  >
                    <span className="block w-4 h-4 rounded-full bg-white border-4 border-brand-secondary shadow-lg group-hover:scale-125 transition-transform" />
                  </button>


                  {/* Accra */}
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedLocation(locations[3])
                    }
                    className="absolute top-[44%] left-[17%] group"
                    aria-label="Accra, Ghana"
                  >
                    <span className="block w-3 h-3 rounded-full bg-white border-2 border-brand-secondary group-hover:scale-125 transition-transform" />
                  </button>


                  {/* Cairo */}
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedLocation(locations[4])
                    }
                    className="absolute top-[20%] left-[61%] group"
                    aria-label="Cairo, Egypt"
                  >
                    <span className="block w-4 h-4 rounded-full bg-white border-4 border-brand-secondary shadow-lg group-hover:scale-125 transition-transform" />
                  </button>


                  {/* Nairobi */}
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedLocation(locations[2])
                    }
                    className="absolute top-[51%] left-[70%] group"
                    aria-label="Nairobi, Kenya"
                  >
                    <span className="block w-4 h-4 rounded-full bg-white border-4 border-brand-secondary shadow-lg group-hover:scale-125 transition-transform" />
                  </button>


                  {/* Kigali */}
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedLocation(locations[1])
                    }
                    className="absolute top-[53%] left-[61%] group"
                    aria-label="Kigali, Rwanda"
                  >
                    <span className="block w-4 h-4 rounded-full bg-white border-4 border-brand-secondary shadow-lg group-hover:scale-125 transition-transform" />
                  </button>


                  {/* Addis Ababa */}
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedLocation(locations[7])
                    }
                    className="absolute top-[39%] left-[68%] group"
                    aria-label="Addis Ababa, Ethiopia"
                  >
                    <span className="block w-3 h-3 rounded-full bg-white border-2 border-brand-secondary group-hover:scale-125 transition-transform" />
                  </button>


                  {/* Johannesburg */}
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedLocation(locations[5])
                    }
                    className="absolute bottom-[16%] left-[57%] group"
                    aria-label="Johannesburg, South Africa"
                  >
                    <span className="block w-4 h-4 rounded-full bg-white border-4 border-brand-secondary shadow-lg group-hover:scale-125 transition-transform" />
                  </button>


                  {/* Cape Town */}
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedLocation(locations[6])
                    }
                    className="absolute bottom-[5%] left-[48%] group"
                    aria-label="Cape Town, South Africa"
                  >
                    <span className="block w-3 h-3 rounded-full bg-white border-2 border-brand-secondary group-hover:scale-125 transition-transform" />
                  </button>

                </div>

              </div>

            </div>

          </div>


          {/* Location Details */}
          <div>

            <div className="bg-surface border border-border rounded-3xl p-6 sticky top-24">

              <div className="w-12 h-12 rounded-xl bg-brand-secondary/10 text-brand-secondary flex items-center justify-center mb-5">
                <MapPin size={22} />
              </div>

              <p className="text-xs font-bold uppercase tracking-wider text-text-tertiary">
                Selected Location
              </p>

              <h2 className="text-2xl font-bold text-text-primary mt-2">
                {selectedLocation.city}
              </h2>

              <p className="text-sm font-semibold text-brand-secondary mt-1">
                {selectedLocation.country}
              </p>

              <p className="text-sm text-text-secondary leading-relaxed mt-5">
                {selectedLocation.description}
              </p>

              <button
                type="button"
                className="
                  mt-6
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-2
                  px-5
                  py-3
                  rounded-xl
                  bg-brand-secondary
                  hover:bg-brand-secondary-hover
                  text-white
                  text-sm
                  font-bold
                  transition-colors
                "
              >
                Explore Opportunities
                <ArrowRight size={16} />
              </button>

            </div>

          </div>

        </div>


        {/* Location Cards */}
        <section className="mt-12">

          <div className="mb-6">

            <h2 className="text-xl font-bold text-text-primary">
              Major African Learning Hubs
            </h2>

            <p className="text-sm text-text-secondary mt-1">
              Discover communities and opportunities across
              the continent.
            </p>

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {locations.map((location) => (

              <button
                key={`${location.city}-${location.country}`}
                type="button"
                onClick={() =>
                  setSelectedLocation(location)
                }
                className="
                  text-left
                  p-5
                  bg-surface
                  border
                  border-border
                  rounded-2xl
                  hover:border-brand-secondary
                  hover:shadow-md
                  transition-all
                "
              >

                <div className="flex items-center gap-3">

                  <div className="w-9 h-9 rounded-lg bg-brand-secondary/10 text-brand-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin size={17} />
                  </div>

                  <div>

                    <h3 className="text-sm font-bold text-text-primary">
                      {location.city}
                    </h3>

                    <p className="text-xs text-text-tertiary">
                      {location.country}
                    </p>

                  </div>

                </div>

              </button>

            ))}

          </div>

        </section>

      </main>

    </div>
  );
};