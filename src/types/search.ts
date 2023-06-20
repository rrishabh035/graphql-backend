export const search = `
    union SearchResults = CandidateResponse | JobResponse

    type Query{
        search(contains: String): [SearchResults!] 
    }

    query GetSearchResults{
        search(contains:contains){
            __typename
            ...on CandidateResponse{
                name
            }

            ...on JobResponse{
                title
            }
        }
    }
`;
