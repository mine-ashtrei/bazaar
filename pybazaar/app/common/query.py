class PaginationQueryParams:

    def __init__(self, skip: int = 0, limit: int = 100) -> None:
        self.skip = skip
        self.limit = limit


class Pagination:

    @staticmethod
    def pagination(query, searchParams: PaginationQueryParams):
        return query.offset(searchParams.skip).limit(searchParams.limit)
