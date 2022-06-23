import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";

import WhatIsJava from './WhatIsJava'
import VariablesAndComments from './VariablesAndComments';
import Arrays from './Arrays';
import Methods from './Methods';
import Operators from './Operators';
import ReadingUserInput from './ReadingUserInput';
import Strings from './Strings';
import Conditionals from './Conditionals';
import Loops from './Loops';
import OOP from './OOP';
import Interfaces from './Interfaces';
import Inheritance from './Inheritance';
import Polymorphism from './Polymorphism';
import Encapsulation from './Encapsulation';
import DBConnection from './DBConnection';
import CreatingAnAPI from './CreatingAnAPI';
import Vcs from './VCSGithubAndGit';
import GitRemoteRepos from './GitRemoteRepositories';
import GitBranching from './GitBranching';
import PMR from './PullAndMergeRequests';
import MergeConflicts from './MergeConflicts';
import Exceptions from './ExceptionHandling';
import Collections from './JavaCollectionsOverview';
import Lists from './Lists';
import Sets from './Sets';
import Queues from './Queues';
import ArrayList from './ArrayList';
import HashTableHashMap from './HashTableHashMap';
import UnitTesting from './UnitTestingJUnit';
import ErrorPage from './ErrorPage';

const WebPages = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element= {<WhatIsJava/>} />
                <Route exact path = "/what-is-java"  element= {<WhatIsJava/>} />
                <Route  exact path = "/variables-and-comments" element = {<VariablesAndComments/>} />
                <Route  exact path = "/arrays" element = {<Arrays/>} />
                <Route  exact path = "/methods" element = {<Methods/>} />
                <Route  exact path = "/operators" element = {<Operators/>} />
                <Route  exact path = "/reading-user-input" element = {<ReadingUserInput/>} />
                <Route  exact path = "/strings"  element= {<Strings/>} />
                <Route  exact path = "/conditionals" element = {<Conditionals/>} />
                <Route exact  path = "/loops" element = {<Loops/>} />
                <Route  exact path = "/object-oriented-programming-basics" element = {<OOP/>} />
                <Route  exact path = "/interfaces" element = {<Interfaces/>} />
                <Route  exact path = "/inheritance"  element= {<Inheritance/>} />
                <Route  exact path = "/polymorphism" element = {<Polymorphism/>} />
                <Route  exact path = "/encapsulation" element = {<Encapsulation/>} />
                <Route  exact path = "/connecting-to-a-database" element = {<DBConnection/>} />
                <Route  exact path = "/creating-an-api" element = {<CreatingAnAPI/>} />
                <Route exact  path = "/vcs-github-git" element = {<Vcs/>} />
                <Route  exact path = "/git-remote-repos"  element= {<GitRemoteRepos/>} />
                <Route  exact path = "/git-branching" element = {<GitBranching/>} />
                <Route  exact path = "/pull-requests-merge-requests" element = {<PMR/>} />
                <Route  exact path = "/merge-conflicts" element = {<MergeConflicts/>} />
                <Route  exact path = "/exception-handling-in-java" element = {<Exceptions/>} />
                <Route  exact path="/java-collections-overview" element={<Collections/>}/>
                <Route exact  path = "/list"  element= {<Lists/>} />
                <Route exact path = "/set" element = {<Sets/>} />
                <Route exact path = "/queue" element = {<Queues/>} />
                <Route  exact path = "/array-list" element = {<ArrayList/>} />
                <Route exact path = "/hash-table-hash-map" element = {<HashTableHashMap/>} />
                <Route exact path = "/unit-testing-junit" element = {<UnitTesting/>} />
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>   
        </Router>
    );
};
export default WebPages;