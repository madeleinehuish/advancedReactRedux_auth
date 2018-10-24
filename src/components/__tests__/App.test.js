import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

it('shows a comment box', () => {
	const wrapped = shallow(<App />);

	expect(wrapped.find(CommentBox).length).toEqual(1); //wrapped.find returns array so we check length as we only need one instance

})

it('shows a comment list', () => {
	const wrapped = shallow(<App />);

	expect(wrapped.find(CommentList).length).toEqual(1);
})
