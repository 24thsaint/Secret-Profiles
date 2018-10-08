const profileQuery = `
    type Query {
        profiles: [Profile]
        profile(firstName: String): [Profile]
    }
`;

module.exports = profileQuery;