import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import { Pagination } from "react-bootstrap";

const Pages = observer(() => {
    const {apps} = useContext(Context)
    const pageCount = Math.ceil(apps.totalCount / apps.limit)
    const pages = [1, 2, 3]

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination  className="mt-3">
        {pages.map(page =>
            <Pagination.Item 
                key={page}
                active={apps.page === page}
                onClick={() => apps.setPage(page)}
            >
                {page}
            </Pagination.Item>
        )}
    </Pagination>
    )
})

export default Pages