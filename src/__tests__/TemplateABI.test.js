import React from 'react';
import renderer from 'react-test-renderer';

import TemplateABI from '../components/TemplateABI';

const mockProps = {
    actionABI: {abi: {
        structs: [],
        actions: [
            {
                ricardian_contract: "## Transfer Terms & Conditions↵↵I, {{from}}, certify the following to be true to the best of my knowledge:↵↵1. I certify that {{quantity}} is not the proceeds of fraudulent or violent activities.↵2. I certify that, to the best of my knowledge, {{to}} is not supporting initiation of violence against others.↵3. I have disclosed any contractual terms & conditions with respect to {{quantity}} to {{to}}.↵↵I understand that funds transfers are not reversible after the {{transaction.delay}} seconds or other delay as configured by {{from}}'s permissions.↵↵If this action fails to be irreversibly confirmed after receiving goods or services from '{{to}}', I agree to either return the goods or services or resend {{quantity}} in a timely manner.↵"
            }
        ]
    }},
    actionData: { 
        data: {
            from: 'testFrom',
            quantity: 100,
            to: 'testTo',
        }
    }
}



it('matches previous snapshot: TemplateABI', () => {
    expect(renderer.create(<TemplateABI {...mockProps} />).toJSON()).toMatchSnapshot();
});
