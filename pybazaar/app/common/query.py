class SearchQueryParams:

    def __init__(self, skip: int = 0, limit: int = 100) -> None:
        self.skip = skip
        self.limit = limit


class SearchQuery:

    @staticmethod
    def pagination(query, searchParams: SearchQueryParams):
        return query.offset(searchParams.skip).limit(searchParams.limit)
