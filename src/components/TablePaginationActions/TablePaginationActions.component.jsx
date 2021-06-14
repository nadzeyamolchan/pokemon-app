import React from "react";
import PropTypes from 'prop-types';
import { useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import {LastPage,FirstPage,KeyboardArrowRight,KeyboardArrowLeft} from '@material-ui/icons';
import tablePaginationActionsStyle from "./TablePaginationActions.style";

export default function TablePaginationActionsComponent(props) {
    const classes = tablePaginationActionsStyle();
    const theme = useTheme();
    const {count, page, rowsPerPage, onChangePage} = props;
    const isDirectionRightToLeft = (theme.direction === 'rtl');

    const handleFirstPageButtonClick = (event) => {
        onChangePage(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onChangePage(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onChangePage(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <div className={classes.paginationButtonsWrapper}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {isDirectionRightToLeft ? <LastPage/> : <FirstPage/>}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                {isDirectionRightToLeft ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {isDirectionRightToLeft ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {isDirectionRightToLeft ? <FirstPage/> : <LastPage/>}
            </IconButton>
        </div>
    );
}

TablePaginationActionsComponent.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};
