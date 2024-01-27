import * as React from 'react';

import ResumeExperience from '../components/ResumeExperience';
import ResumeInfo from '../components/ResumeInfo';
import ResumeLayout from '../layout/ResumeLayout';

export default function ResumePage() {
  return (
    <ResumeLayout.Root>
      <ResumeLayout.InfoPane>
        <ResumeInfo />
      </ResumeLayout.InfoPane>
      <ResumeLayout.ExperiencePane>
        <ResumeExperience />
      </ResumeLayout.ExperiencePane>
    </ResumeLayout.Root>
  );
}
