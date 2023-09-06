export interface CallkitVoipPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
