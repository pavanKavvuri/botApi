interface Interval {
    start: string | number;
    end: string | number;
};

interface ActiveIncidents{
    weeks : Array<Interval>;
    new : Array<number>;
    active : Array<number>;
    closed : Array<number>;
};

interface ActiveEnhancemnets{
    weeks : Array<Interval>;
    new : Array<number>;
    active : Array<number>;
    closed : Array<number>;
};

interface ActiveServiceRequests{
    weeks : Array<Interval>;
    new : Array<number>;
    active : Array<number>;
    closed : Array<number>;
};

interface Aging{
    weeks: Array<Interval>
    awaiting_user_info: Array<number>;
    four_weeks: Array<number>;
    twelve_weeks: Array<number>;
};

export{
    Interval,
    ActiveIncidents,
    ActiveEnhancemnets,
    ActiveServiceRequests,
    Aging
};