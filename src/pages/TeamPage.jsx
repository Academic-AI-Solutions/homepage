import React from 'react';
import { Helmet } from 'react-helmet';
import { PageHero } from '@/components/ui/page-hero';
import SectionHeader from '@/components/SectionHeader';
import TeamShowcase from '@/components/ui/team-showcase';

// social: { linkedin, twitter, instagram, email } — populate per-member as URLs become available.
const TEAM_MEMBERS = [
  { name: 'Daniel Round', title: 'Founder/Chief Executive Officer (CEO)', image: '/headshots/daniel-round.jpg', social: {} },
  { name: 'Scott Putnam', title: 'Chief Innovation Officer (CINO)', image: '/headshots/scott-putnam.jpg', social: {} },
  { name: 'Scott Bayless', title: 'Chief Technology Officer (CTO)', image: '/headshots/scott-bayless.png', social: {} },
  { name: 'Roger Emerson', title: 'Chief Engineering Officer (CE)', image: '/headshots/roger-emerson.jpg', social: {} },
  { name: 'Dr. Steven Colby', title: 'Patent Attorney', image: '/headshots/dr-steven-colby.png', social: {} },
  { name: 'Ryan Radomski', title: 'Chief AI Automation Officer (CAIO)', image: '/headshots/ryan-radomski.png', social: {} },
  { name: 'Charles Scott', title: 'Senior Litigation Attorney', image: '/headshots/charles-scott.png', social: {} },
  { name: 'Ryan Yohe', title: 'Chief Operations Officer (COO)', image: '/headshots/ryan-yohe.jpg', social: {} },
  { name: 'Stewart Tinti', title: 'Chief Administrative Officer (CAO)', image: '/headshots/stewart-tinti.gif', social: {} },
  { name: 'Robert Spottswood Jr.', title: 'Hospitality Attorney', image: null, social: {} },
  { name: 'Rob Gebaide', title: 'Senior Transactional Attorney', image: null, social: {} },
  { name: 'Joseph Reiben', title: 'Emerging Technologies Attorney', image: '/headshots/joseph-reiben.png', social: {} },
  { name: 'Kory Collins', title: 'Chief Strategy Officer (CSO)', image: null, social: {} },
  { name: 'Jacob Hill', title: 'Chief Marketing Officer (CMO)', image: '/headshots/jacob-hill.png', social: {} },
  { name: 'Jameson Shelnut', title: 'Chief Experience Officer (CXO)', image: null, social: {} },
  { name: 'William Reynolds', title: 'Financial Attorney', image: '/headshots/will-reynolds.gif', social: {} },
  { name: 'Jon Agustin', title: 'Senior Software Engineer', image: '/headshots/jonathan-agustin.png', social: {} },
  { name: 'Raymond Carapella', title: 'Financial Systems Director', image: '/headshots/raymond-carapella.jpg', social: {} },
  { name: 'Radhesh Choudhary', title: 'AI Software Engineer', image: '/headshots/radhesh-choudhary.png', social: {} },
  { name: 'Jonah Efaw', title: 'Director of Ops (DO)', image: '/headshots/jonah-efaw.png', social: {} },
  { name: 'Will Dahlquist', title: 'Investor Relations', image: null, social: {} },
  { name: 'Brock Gorubec', title: 'Investor Relations', image: '/headshots/brock-gorubec.jpg', social: {} },
  { name: 'Eric Peter', title: 'Software Engineer', image: '/headshots/eric-peter.jpg', social: {} },
  { name: 'Ben Radde', title: 'Legal Assistant', image: '/headshots/ben-radde.png', social: {} },
];

const TeamPage = () => {
  return (
    <>
      <Helmet>
        <title>Team — Academic AI Solutions</title>
        <meta
          name="description"
          content="Meet the team behind Academic AI Solutions. Education operators, AI engineers, enterprise builders, and patent attorneys building the AI operating system for higher education."
        />
      </Helmet>

      <div className="pt-[var(--nav-h)]">
        <PageHero
          id="team-hero"
          kicker="The Team"
          title={
            <>
              Built by People Who Know <span className="text-primary">Both Worlds</span>
            </>
          }
          subtitle="Education operators. AI engineers. Enterprise builders. Patent attorneys. Our team brings together deep institutional knowledge with the technical expertise to build and scale."
          image="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=1920&q=80&auto=format"
        />

        <section id="team-grid" className="relative z-10 bg-background py-24">
          <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">
            <SectionHeader
              title={<>The People Behind <span className="text-primary">AAS</span></>}
              subtitle="Leadership, engineering, and counsel — together since day one."
            />
            <TeamShowcase members={TEAM_MEMBERS} />
          </div>
        </section>
      </div>
    </>
  );
};

export default TeamPage;
