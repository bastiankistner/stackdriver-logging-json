// TODO

import { auth } from 'google-auth-library';

export async function initLogger() {
	// use google-auth-library to determine projectId (when run on a GCP resource)
	const projectId = await auth.getProjectId();
}
