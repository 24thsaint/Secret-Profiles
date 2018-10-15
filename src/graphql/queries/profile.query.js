const profileQuery = `
    type Query {
        profiles: [Profile]
        profile(id: String): [Profile]
    }
`;

module.exports = profileQuery;