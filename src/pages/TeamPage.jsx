import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { PageHero } from '@/components/ui/page-hero';
import SectionHeader from '@/components/SectionHeader';

const TEAM_MEMBERS = [
  { name: 'Daniel Round', title: 'Founder/Chief Executive Officer (CEO)', image: '/headshots/daniel-round.jpg' },
  { name: 'Scott Putnam', title: 'Chief Innovation Officer (CINO)', image: '/headshots/scott-putnam.jpg' },
  { name: 'Scott Bayless', title: 'Chief Technology Officer (CTO)', image: '/headshots/scott-bayless.png' },
  { name: 'Roger Emerson', title: 'Chief Engineering Officer (CE)', image: '/headshots/roger-emerson.jpg' },
  { name: 'Dr. Steven Colby', title: 'Patent Attorney', image: '/headshots/dr-steven-colby.png' },
  { name: 'Ryan Radomski', title: 'Chief AI Automation Officer (CAIO)', image: '/headshots/ryan-radomski.png' },
  { name: 'Charles Scott', title: 'Senior Litigation Attorney', image: '/headshots/charles-scott.png' },
  { name: 'Ryan Yohe', title: 'Chief Operations Officer (COO)', image: '/headshots/ryan-yohe.jpg' },
  { name: 'Stewart Tinti', title: 'Chief Administrative Officer (CAO)', image: '/headshots/stewart-tinti.gif' },
  { name: 'Robert Spottswood Jr.', title: 'Hospitality Attorney', image: null },
  { name: 'Rob Gebaide', title: 'Senior Transactional Attorney', image: null },
  { name: 'Joseph Reiben', title: 'Emerging Technologies Attorney', image: '/headshots/joseph-reiben.png' },
  { name: 'Kory Collins', title: 'Chief Strategy Officer (CSO)', image: null },
  { name: 'Jacob Hill', title: 'Chief Marketing Officer (CMO)', image: '/headshots/jacob-hill.png' },
  { name: 'Jameson Shelnut', title: 'Chief Experience Officer (CXO)', image: null },
  { name: 'William Reynolds', title: 'Financial Attorney', image: '/headshots/will-reynolds.gif' },
  { name: 'Jon Agustin', title: 'Senior Software Engineer', image: '/headshots/jonathan-agustin.png' },
  { name: 'Raymond Carapella', title: 'Financial Systems Director', image: '/headshots/raymond-carapella.jpg' },
  { name: 'Radhesh Choudhary', title: 'AI Software Engineer', image: '/headshots/radhesh-choudhary.png' },
  { name: 'Jonah Efaw', title: 'Director of Ops (DO)', image: '/headshots/jonah-efaw.png' },
  { name: 'Will Dahlquist', title: 'Investor Relations', image: null },
  { name: 'Brock Gorubec', title: 'Investor Relations', image: '/headshots/brock-gorubec.jpg' },
  { name: 'Eric Peter', title: 'Software Engineer', image: '/headshots/eric-peter.jpg' },
  { name: 'Ben Radde', title: 'Legal Assistant', image: '/headshots/ben-radde.png' },
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

        <section id="team-grid" className="relative z-10 py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="The People Behind AAS"
              subtitle="Leadership, engineering, and counsel — together since day one."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {TEAM_MEMBERS.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 4) * 0.1 }}
                  whileHover={{
                    y: -5,
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                  }}
                  className="p-6 bg-card rounded-xl shadow-lg border border-border text-center transition-all"
                >
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-6 object-cover object-top border-4 border-accent/40"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full mx-auto mb-6 bg-muted border-4 border-accent/40 flex items-center justify-center">
                      <User className="text-muted-foreground" size={48} />
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold text-sm">{member.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TeamPage;
