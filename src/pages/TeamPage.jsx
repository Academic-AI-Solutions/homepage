import React from 'react';
import { Helmet } from 'react-helmet';
import SectionHeader from '@/components/SectionHeader';
import TeamShowcase from '@/components/ui/team-showcase';
import { TEAM_MEMBERS } from '@/data/team';

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
        <section id="team-grid" className="relative z-10 bg-background pb-24 pt-16 md:pt-20">
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
