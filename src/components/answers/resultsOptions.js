import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ResultsDetail from './resultsDetail';

const Options = ({ uid, question }) => {

    return (
        <Fragment>
            <div>
                <div>
                    Results:
                </div><div>
                    <ResultsDetail
                        uid={uid}
                        question={question}
                        option={question.optionOne}
                    />
                </div><div>
                    <ResultsDetail
                        uid={uid}
                        question={question}
                        option={question.optionTwo}
                    />
                </div>
            </div>
        </Fragment>
    );
};

Options.propTypes = {
    uid: PropTypes.string.isRequired,
    question: PropTypes.object.isRequired
};

Options.defaultProps = {
    uid: '-1',
    question: {}
};

export default Options;
