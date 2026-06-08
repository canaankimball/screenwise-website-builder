import React from 'react';
import Layout from '@/components/Layout';
import home from '@/assets/yumeats/02_hom.png.asset.json';
import profile from '@/assets/yumeats/03_pro.png.asset.json';
import stats from '@/assets/yumeats/04_sta.png.asset.json';
import sub from '@/assets/yumeats/05_sub.png.asset.json';
import preMeal from '@/assets/yumeats/06_pre.png.asset.json';
import reward from '@/assets/yumeats/07_cho.png.asset.json';
import meal from '@/assets/yumeats/08_mea.png.asset.json';
import mealChew from '@/assets/yumeats/09_mea.png.asset.json';
import chest from '@/assets/yumeats/10_tre.png.asset.json';
import postMeal from '@/assets/yumeats/11_pos.png.asset.json';

const Shot = ({ src, alt }: { src: string; alt: string }) => (
  <div className="my-8 flex justify-center">
    <img
      src={src}
      alt={alt}
      className="w-full max-w-[700px] rounded-2xl shadow-lg border border-gray-100"
      loading="lazy"
    />
  </div>
);

const Callout = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="my-8 rounded-2xl border border-[#e8dfc9] bg-[#f7f0dc] p-6 md:p-8">
    <h4 className="text-xl font-semibold text-screenwise-navy mb-2">{title}</h4>
    <div className="text-gray-700 leading-relaxed">{children}</div>
  </div>
);

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-screenwise-navy mt-16 mb-4">{children}</h2>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-2xl font-semibold text-screenwise-teal mt-10 mb-3">{children}</h3>
);

const YumEatsGuide = () => {
  return (
    <Layout>
      <article className="bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-b from-screenwise-light to-white pt-12 pb-16">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-screenwise-navy mb-4">YumEats</h1>
            <p className="text-xl md:text-2xl text-screenwise-teal font-medium mb-3">
              A Parent's Guide to Getting Started
            </p>
            <p className="italic text-gray-600 mb-8">
              Building confident, healthy eaters — one bite at a time.
            </p>
            <div className="my-8 flex justify-center">
              <img
                src="/lovable-uploads/5cab5ef1-a411-413d-8ba7-ca15b6162039.png"
                alt="Screenwise Eating logo"
                className="h-32 md:h-40 w-auto"
              />
            </div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              This guide walks you through every screen of the app, what each button does, and the
              philosophy behind it.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-3xl pb-24">
          {/* Video */}
          <div className="my-10">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-lg" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube-nocookie.com/embed/HMR086QALik"
                title="YumEats demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="mt-3 text-center text-gray-600">
              Watch the demo —{' '}
              <a
                href="https://www.youtube.com/watch?v=HMR086QALik"
                className="text-screenwise-teal underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                youtube.com/watch?v=HMR086QALik
              </a>
            </p>
          </div>

          {/* Welcome */}
          <SectionHeading>Welcome to YumEats</SectionHeading>
          <p className="text-lg text-gray-700 leading-relaxed">
            YumEats helps children develop better eating habits by rewarding them for taking bites.
            It's built on Applied Behavior Analysis (ABA), the gold standard in feeding therapy and
            in supporting children with autism and other challenges. The app meets your child where
            they are today and grows with them.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            This guide follows the natural flow of the app: starting at the Home screen, setting
            your child's level, and then walking through a full meal from start to reward.
          </p>

          {/* Home */}
          <SectionHeading>The Home Screen</SectionHeading>
          <p className="text-lg text-gray-700 leading-relaxed">
            The Home screen is your starting point. From here you can begin a meal, review past
            meals, switch between children, and reach every other part of the app.
          </p>
          <Shot src={home.url} alt="Home screen" />
          <h4 className="text-xl font-semibold text-screenwise-navy mb-3">What you'll find here</h4>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 text-lg">
            <li><strong>Start Meal</strong> begins a new meal session.</li>
            <li><strong>Meal History</strong> lets you review every meal you've logged.</li>
            <li><strong>Profile Selector</strong> (top right) lets you switch between children.</li>
          </ul>

          {/* Profile */}
          <SectionHeading>Profile Tab (bottom left)</SectionHeading>
          <p className="text-lg text-gray-700 leading-relaxed">
            This is where you set the level your child is playing at. The level controls how many
            bites your child takes to earn a reward and how long that reward lasts. As your child
            grows more confident, you unlock the next stage.
          </p>
          <Shot src={profile.url} alt="Profile tab with levels" />
          <Callout title="How levels work">
            <strong>Beginner:</strong> 1 bite earns a 20-second reward. Unlock <strong>Learner</strong> and it becomes
            2 bites for a 30-second reward. You keep increasing the challenge as your child
            progresses. This gradual step-up is the heart of the ABA approach — small, achievable
            goals that build on each other.
          </Callout>

          {/* Statistics */}
          <SectionHeading>Statistics Tab</SectionHeading>
          <p className="text-lg text-gray-700 leading-relaxed">
            Track your child's progress over time across a range of metrics. You can adjust:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 text-lg mt-3">
            <li>the time frame the graphs display;</li>
            <li>the specific meals shown (breakfast, lunch, dinner, snack);</li>
            <li>and the specific foods your child is working on — so you can watch progress on challenge or "fear" foods develop over time.</li>
          </ul>
          <Shot src={stats.url} alt="Statistics tab" />

          {/* Subscription */}
          <SectionHeading>Subscription Tab</SectionHeading>
          <p className="text-lg text-gray-700 leading-relaxed">
            Find details here about continuing your subscription with YumEats Premium.
          </p>
          <Shot src={sub.url} alt="Subscription tab" />

          {/* Walking Through a Meal */}
          <SectionHeading>Walking Through a Meal</SectionHeading>
          <p className="text-lg text-gray-700 leading-relaxed">
            Tap <strong>Start Meal</strong> on the Home screen to begin. The next few screens take
            you from choosing the meal all the way through to your child's reward.
          </p>

          <SubHeading>Step 1 — Choose the Meal Type</SubHeading>
          <p className="text-lg text-gray-700 leading-relaxed">
            Select which meal this is: Breakfast, Lunch, Dinner, or Snack. You can also enter the
            volume and grams of the food before your child eats. You'll get a chance to add the
            post-meal volume later, so you can measure how much was actually eaten.
          </p>

          <SubHeading>Step 2 — Select Foods</SubHeading>
          <p className="text-lg text-gray-700 leading-relaxed">
            Use the food selection panel to search for the foods your child will eat. If a food
            isn't listed, you can add a custom food. Logging specific foods lets you mark when your
            child takes bites of each one — and watch their progress with those foods over time.
          </p>
          <Shot src={preMeal.url} alt="Pre-meal log" />
          <Callout title="Why this matters">
            If your child struggles with certain foods — challenge foods or "fear" foods — you can
            incentivize them to eat those specific foods. The Statistics tab then shows you exactly
            how their comfort with each food is developing.
          </Callout>
          <p className="text-lg text-gray-700 leading-relaxed">
            When you're ready, tap <strong>Continue</strong>. You can also continue without
            selecting any foods.
          </p>

          <SubHeading>Step 3 — Choose the Reward</SubHeading>
          <p className="text-lg text-gray-700 leading-relaxed">
            The reward is what your child is working toward. Choose from: YouTube videos,
            audiobooks, social stories, games, puzzles, or a custom reward. A custom reward lets you
            label anything that motivates your child — for example, "Toy Time." Once you choose a
            reward, the app takes you to the meal screen.
          </p>
          <Shot src={reward.url} alt="Choose your reward" />

          {/* Meal Screen */}
          <SectionHeading>The Meal Screen</SectionHeading>
          <p className="text-lg text-gray-700 leading-relaxed">
            This is where the meal actually happens. At the top you'll see a blurred-out reward,
            with bite buttons below it. The reward stays blurred until your child earns it by
            taking bites.
          </p>
          <Shot src={meal.url} alt="Meal screen" />
          <h4 className="text-xl font-semibold text-screenwise-navy mb-3">How a bite works</h4>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2 text-lg">
            <li>When your child takes a bite, have them press <strong>Bite 1</strong>.</li>
            <li>A caterpillar moves across the screen — this is the cue for your child to chew.</li>
            <li>When the chew interval ends, it's time for the next bite; the number of bites required depends on your child's current level.</li>
            <li>After the final bite, the screen says "Start your reward when finished chewing and swallowing."</li>
            <li>Once your child has swallowed, press <strong>Play</strong> to unlock the reward.</li>
          </ol>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            For example, at a 2-bite level, your child takes a bite, chews, takes a second bite,
            chews and swallows — and then the reward unlocks.
          </p>
          <Shot src={mealChew.url} alt="Meal screen with chew animation" />

          <SubHeading>Earning reward time</SubHeading>
          <p className="text-lg text-gray-700 leading-relaxed">
            Each bite your child takes adds more seconds toward the final reward. When the reward's
            time runs out, it blurs again — signaling that it's time for another bite. This cycle
            repeats throughout the meal. How many seconds your child earns per stage depends on the
            level they're on.
          </p>

          <SubHeading>The Treasure Chest</SubHeading>
          <p className="text-lg text-gray-700 leading-relaxed">
            In the bottom right corner is a treasure chest. When the meal is over, your child taps
            the chest to receive their reward — a satisfying finish that celebrates their effort.
          </p>
          <Shot src={chest.url} alt="Treasure chest" />

          <SubHeading>Step 4 — Hand the Phone Back</SubHeading>
          <p className="text-lg text-gray-700 leading-relaxed">
            At the end of the reward, the app prompts your child to pass the phone back to you.
            This is where you log the details of the meal — including the post-meal volume. When
            you're done, tap <strong>Save</strong>. The meal is then stored in your Meal History and
            added to the Statistics tab, so it counts toward your child's long-term progress.
          </p>
          <Shot src={postMeal.url} alt="Post-meal log" />

          {/* Three Things */}
          <SectionHeading>Three Things Every Parent Should Know</SectionHeading>
          <ol className="list-decimal pl-6 text-gray-700 space-y-4 text-lg">
            <li>
              <strong>Always supervise.</strong> A parent should always be present and watching
              while your child is eating. Never leave a child unattended during a meal.
            </li>
            <li>
              <strong>It's backed by science.</strong> YumEats uses a behavioral approach, and
              incentivizing each bite is supported by a substantial body of research demonstrating
              its effectiveness.
            </li>
            <li>
              <strong>The goal is independence.</strong> Over time, YumEats helps wean children off
              the device so they become confident, healthy eaters on their own.
            </li>
          </ol>

          <Callout title="Remember">
            Every child progresses at their own pace. Celebrate small wins, move up levels only when
            your child is ready, and let the app do what it does best — turn each bite into a step
            forward.
          </Callout>

          <p className="text-center italic text-lg text-screenwise-navy mt-12">
            Building confident, healthy eaters — one bite at a time.
          </p>
        </div>
      </article>
    </Layout>
  );
};

export default YumEatsGuide;