import * as core from "@actions/core";
import * as github from '@actions/github';

export const context = github.context;


const run = () => {
    try {
        const repoToken: string = core.getInput("repo-token", { required: true });
    }
    catch (error) {
        //@ts
        core.setFailed(error.message);
        throw error;
      }

}
