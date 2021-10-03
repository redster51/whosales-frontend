import { Route, Switch } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export const RootRouter = () => (
    <Switch>
        <Route path="/sign-in">
            <SignIn/>
        </Route>
        <Route path="/sign-up">
            <SignUp/>
        </Route>
    </Switch>
);
