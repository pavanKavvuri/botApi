interface GroupScoreCard {
    scoreCard: Array<GroupScoreCardDetails>
};

interface GroupScoreCardDetails {
    groupName: string;
    incidentScoreCard: IncidentScoreCard;
    enhancementScoreCard: EnhancementScoreCard;
    serviceReqScoreCard: ServiceReqScoreCard;
};

interface IncidentScoreCard {
    inflow: string | number;
    closed: string | number;
    active: string | number;
    gt30Days: string | number;
};

interface EnhancementScoreCard {
    activeBugs: string | number;
    activeITChanges: string | number;
    activeBusinessChanges: string | number;
    closed: string | number;
};

interface ServiceReqScoreCard {
    inflow: string | number;
    closed: string | number;
    active: string | number;
    gt30Days: string | number;
};

export {
    GroupScoreCard,
    GroupScoreCardDetails,
    IncidentScoreCard,
    EnhancementScoreCard,
    ServiceReqScoreCard
};