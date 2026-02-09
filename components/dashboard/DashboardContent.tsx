'use client'

import ToolHealthOverview from './views/ToolHealthOverview'
import DepthRepeatability from './views/DepthRepeatability'
import WaferConsistency from './views/WaferConsistency'
import UniformityCheck from './views/UniformityCheck'
import ChamberMatching from './views/ChamberMatching'
import ProfileStability from './views/ProfileStability'
import Cleanliness from './views/Cleanliness'
import EtchRateStability from './views/EtchRateStability'
import PostPMRecovery from './views/PostPMRecovery'
import IssueTriage from './views/IssueTriage'

export default function DashboardContent({ view }) {
  const renderView = () => {
    switch (view) {
      case 'overview':
        return <ToolHealthOverview />
      case 'depth-repeatability':
        return <DepthRepeatability />
      case 'wafer-consistency':
        return <WaferConsistency />
      case 'uniformity':
        return <UniformityCheck />
      case 'chamber-matching':
        return <ChamberMatching />
      case 'profile-stability':
        return <ProfileStability />
      case 'cleanliness':
        return <Cleanliness />
      case 'etch-rate':
        return <EtchRateStability />
      case 'pm-recovery':
        return <PostPMRecovery />
      case 'issue-triage':
        return <IssueTriage />
      case 'jobs':
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-[#0f172a] mb-2">Jobs & Activities</h1>
            <p className="text-[#475569] text-lg">Jobs and activities management coming soon</p>
          </div>
        )
      case 'reports':
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-[#0f172a] mb-2">Reports & Sign-Off</h1>
            <p className="text-[#475569] text-lg">Reports and sign-off system coming soon</p>
          </div>
        )
      case 'facility':
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-[#0f172a] mb-2">Facility Correlation</h1>
            <p className="text-[#475569] text-lg">Facility correlation analysis coming soon</p>
          </div>
        )
      default:
        return <ToolHealthOverview />
    }
  }

  return <div className="bg-[#f8fafc]">{renderView()}</div>
}
