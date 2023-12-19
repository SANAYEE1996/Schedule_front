let msHost;

const hostname = window && window.location && window.location.hostname;

if (hostname == "localhost" || hostname == "127.0.0.1"){
    msHost = "http://localhost:6000";
}

export const SCHEDULE_URL = `${msHost}`;