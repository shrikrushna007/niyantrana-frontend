import PageContainer from "../components/layout/PageContainer";
import ProfileHeader from "../components/profile/ProfileHeader";
import HealthSnapshot from "../components/profile/HealthSnapshot";
import DataConnections from "../components/profile/DataConnections";
import ConfidenceCard from "../components/profile/ConfidenceCard";
import ProfileActions from "../components/profile/ProfileActions";

export default function Profile() {
  return (
    <PageContainer>
      <h1 className="text-3xl font-bold text-gradient mb-8">Profile</h1>

      <div className="space-y-8">
        <ProfileHeader />

        <HealthSnapshot />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DataConnections />
          <ConfidenceCard />
        </div>

        <ProfileActions />
      </div>
    </PageContainer>
  );
}
